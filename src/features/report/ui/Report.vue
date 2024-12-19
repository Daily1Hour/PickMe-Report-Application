<template :key="$route.fullPath">
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
import { ref } from "vue";
import { useRoute } from "vue-router";

import Section from "./Section.vue";

import { ReportType } from "@/entities/report/model";
import client from "@/shared/api/client";
import { ReportDTO, CompanyDetailDTO, IndustryDetailDTO } from "../api/dto";
import { map_to_companyReport, map_to_industryReport, map_to_reportDTO } from "../api/mapper";

const props = defineProps<{
  category: string;
  created_at: string;
}>();

const route = useRoute();
const sections = ref<string[]>();
const report = ref<ReportType>(
  props.category === "company" ? map_to_companyReport() : map_to_industryReport(),
);

sections.value =
  props.category === "company"
    ? ["name", "features", "ideal_talent", "news"]
    : ["type", "features", "news"];

if (route.name === "new") {
  report.value = props.category === "company" ? map_to_companyReport() : map_to_industryReport();
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

    if (updated_category === "company") {
      const fetch_report = data.data.companyDetails?.[0];
      report.value = map_to_companyReport(fetch_report as CompanyDetailDTO);
    } else if (updated_category === "industry") {
      const fetch_report = data.data.industryDetails?.[0];
      report.value = map_to_industryReport(fetch_report as IndustryDetailDTO);
    }
    sections.value = Object.keys(report.value) as string[];
  }
}

async function save() {
  const params = {
    category: props.category,
    createdAt: props.created_at,
  };

  const dto = map_to_reportDTO(report.value);
  if (params.createdAt) {
    const response = await client.put("", dto, { params });
    console.log("put", response);
  } else {
    const response = await client.post("", dto);
    console.log("post", response);
  }
}
</script>
