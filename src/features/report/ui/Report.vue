<template :key="$route.fullPath">
  <div class="column" style="width: calc(100% - 150px)">
    <ul style="list-style-type: none; order: 1">
      <li v-for="key in sections" :key="key">
        <Section :id="key" v-model:content="report[key as keyof ReportType]" />
      </li>
    </ul>
    <div class="row justify-end" v-for="order in [0, 2]" :key="order" :style="{ order }">
      <SaveReport :category="props.category" :created_at="props.created_at" :report="report" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

import Section from "./Section.vue";
import SaveReport from "./SaveReport.vue";
import { ReportDTO, CompanyDetailDTO, IndustryDetailDTO } from "../api/dto";
import { map_to_companyReport, map_to_industryReport } from "../api/mapper";
import { ReportType } from "@/entities/report/model";
import { Category } from "@/entities/report/model/Category";
import client from "@/shared/api/client";

const props = defineProps<{
  category: Category;
  created_at: string;
}>();

const route = useRoute();
const sections = ref<string[]>();
const report = ref<ReportType>(
  props.category === Category.Company ? map_to_companyReport() : map_to_industryReport(),
);

sections.value =
  props.category === Category.Company
    ? ["name", "features", "ideal_talent", "news"]
    : ["type", "features", "news"];

if (route.name === "new") {
  report.value =
    props.category === Category.Company ? map_to_companyReport() : map_to_industryReport();
} else if (route.name === "detail") {
  fetch();
}

async function fetch() {
  const params = {
    category: props.category,
    createdAt: props.created_at,
  };

  const data = await client.get<ReportDTO>("", { params });

  if (data.status === 200) {
    const updated_category = data.data.category;

    switch (updated_category) {
      case Category.Company: {
        const fetch_report = data.data.companyDetails?.[0];
        report.value = map_to_companyReport(fetch_report as CompanyDetailDTO);
        break;
      }
      case Category.Industry: {
        const fetch_report = data.data.industryDetails?.[0];
        report.value = map_to_industryReport(fetch_report as IndustryDetailDTO);
        break;
      }
    }

    sections.value = Object.keys(report.value) as string[];
  }
}
</script>
