<template>
  <div class="q-pa-md" style="max-width: 350px; position: sticky; top: 0; height: 100%">
    <q-list bordered separator>
      <q-item v-for="item in sorted_items" clickable v-ripple>
        <Tab :summary="item" />
        <DeleteReport :category="item.category" :created_at="item.created_at" />
      </q-item>

      <q-item clickable v-ripple>
        <AddReport />
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import Tab from "./Tab.vue";
import AddReport from "./AddReport.vue";
import DeleteReport from "./DeleteReport.vue";

import { ReportDTO } from "@/features/report/api/dto";
import { map_to_summary } from "@/features/report/api/mapper";
import Summary from "@/entities/report/model/Summary";
import { Category } from "@/entities/report/model/Category";
import client from "@/shared/api/client";

const items = ref<Summary[]>([]);

const sorted_items = computed(() =>
  items.value.sort((a, b) => b.created_at.getTime() - a.created_at.getTime()),
);

const fetch = async (category: Category) => {
  const data = await client.get<ReportDTO[]>("/list", {
    params: {
      category,
    },
  });

  if (data.status === 200) {
    const reports = data.data;
    const result = reports.map(map_to_summary);
    return result || [];
  }
  return [];
};

onMounted(async () => {
  const companies = await fetch(Category.Company);
  const industries = await fetch(Category.Industry);

  items.value = [...companies, ...industries];
});
</script>
