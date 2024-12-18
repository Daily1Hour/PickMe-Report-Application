<template>
  <div class="column" style="width: calc(100% - 150px)">
    <ul style="list-style-type: none; order: 1">
      <li v-for="key in sections" :key="key">
        <Section :id="key" v-model:content="report[key as keyof ReportType]" />
      </li>
    </ul>
    <div class="row justify-end" v-for="order in [0, 2]" :key="order" :style="{ order }">
      <q-btn label="저장" @click="save" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from "vue";
import Section from "./Section.vue";

import { ReportType } from "@/entities/report/model";
import client from "@/shared/api/client";
import {
  ReportDTO,
  CompanyDetailDTO,
  IndustryDetailDTO,
  map_to_companyReport,
  map_to_industryReport,
} from "@/shared/api/dto";

const props = defineProps<{
  category: string;
  created_at: string;
}>();

const sections = ref<string[]>();
const report = ref<ReportType>(
  props.category === "company" ? map_to_companyReport() : map_to_industryReport(),
);

watch(
  () => props.category,
  async (updated_category) => {
    if (updated_category === "company") {
      sections.value = ["name", "features", "ideal_talent", "news"];
      report.value = map_to_companyReport();
    }
    if (updated_category === "industry") {
      sections.value = ["type", "features", "news"];
      report.value = map_to_industryReport();
    }
  },
);
watchEffect(async () => {
  const params = {
    category: props.category,
    createdAt: props.created_at,
  };

  const data = await client.get<ReportDTO>("", { params });

  if (data.status === 200) {
    const updated_category = data.data.category;
    const fetch_report = data.data.companyDetails[0];

    if (updated_category === "company") {
      report.value = map_to_companyReport(fetch_report as CompanyDetailDTO);
    } else if (updated_category === "industry") {
      report.value = map_to_industryReport(fetch_report as IndustryDetailDTO);
    }
    sections.value = Object.keys(report.value) as string[];
  }
});

function save() {
  console.log("report", report.value);
}
</script>
