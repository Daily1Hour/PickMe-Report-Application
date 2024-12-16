<template>
  <div class="q-pa-md" style="max-width: 350px; position: sticky; top: 0; height: 100%">
    <q-list bordered separator>
      <q-item v-for="item in items" clickable v-ripple>
        <Tab :item="item" />
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section style="align-content: center">
          <q-icon name="add" />
          <q-popup-edit v-model="category" auto-save>
            <q-select
              v-model="category"
              :options="category_options"
              label="카테고리"
              style="width: 100px"
            />
          </q-popup-edit>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import client from "../api/client";
import { ReportDTO } from "../api/dto";
import Summary from "../../entities/model/Summary";
import Tab from "./Tab.vue";

const category = ref("Company");
const category_options = ref(["Company", "Industry"]);

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
