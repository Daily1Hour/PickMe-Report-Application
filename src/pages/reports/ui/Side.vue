<template>
  <div class="q-pa-md" style="max-width: 350px; position: sticky; top: 0; height: 100%">
    <q-list bordered separator>
      <q-item v-for="item in items" clickable v-ripple>
        <Tab :item="item" />
        <DeleteReport :category="item.category" :created_at="item.created_at.toISOString()" />
      </q-item>

      <q-item clickable v-ripple>
        <AddReport />
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import Tab from "./Tab.vue";
import AddReport from "./AddReport.vue";
import DeleteReport from "./DeleteReport.vue";

import Summary from "@/entities/report/model/Summary";
import client from "@/shared/api/client";
import { CompanyDetailDTO, IndustryDetailDTO, ReportDTO } from "@/shared/api/dto";

const category = ref("Company");

const items = ref<Summary[]>([]);

const fetch = async () => {
  const data = await client.get<ReportDTO[]>("/list", {
    params: {
      category: category.value,
    },
  });

  if (data.status === 200) {
    const reports = data.data;

    const formatted_reports = reports.map((report, index) => {
      const category = report.category;

      switch (category) {
        case "company": {
          const detail = report.companyDetails?.[0] || {};
          return {
            id: index.toString(),
            category: report.category,
            name: (detail as CompanyDetailDTO).companyName,
            created_at: new Date(report.createdAt),
          };
        }
        case "industry": {
          const detail = report.companyDetails?.[0] || {};
          return {
            id: index.toString(),
            category: report.category,
            name: (detail as IndustryDetailDTO).industryType,
            created_at: new Date(report.createdAt),
          };
        }
        default:
          return {
            id: index.toString(),
            category: report.category,
            name: "Unknown",
            created_at: new Date(report.createdAt),
          };
      }
    });

    items.value = formatted_reports;
  }
};

onMounted(() => {
  fetch();
});
</script>
