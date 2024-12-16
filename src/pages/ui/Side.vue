<template>
  <div class="q-pa-md" style="max-width: 350px; position: sticky; top: 0; height: 100%">
    <q-list bordered separator>
      <q-item v-for="item in items" clickable v-ripple>
        <Tab :item="item" />
      </q-item>

      <q-item clickable v-ripple>
        <AddReport />
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import client from "../../shared/api/client";
import { ReportDTO } from "../api/dto";
import Summary from "../../entities/model/Summary";
import Tab from "./Tab.vue";
import AddReport from "./AddReport.vue";

const category = ref("Company");

const items = ref<Summary[]>([]);

const fetch = async () => {
  const data = await client.get("/list", {
    params: {
      category: category.value,
    },
  });

  if (data.status === 200) {
    const reports: ReportDTO[] = data.data;

    const formatted_reports = reports.map((report, index) => ({
      id: index.toString(),
      category: report.category,
      name: report.companyDetails[0].companyName,
      created_at: new Date(report.createdAt),
    }));

    items.value = formatted_reports;
  }
};

onMounted(() => {
  fetch();
});
</script>
