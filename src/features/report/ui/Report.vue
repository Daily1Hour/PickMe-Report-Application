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

import { CompanyReport, IndustryReport, ReportType } from "@/entities/report/model";
import client from "@/shared/api/client";
import { ReportDTO, CompanyDetailDTO, IndustryDetailDTO } from "@/shared/api/dto";

const props = defineProps<{
  category: string;
  created_at: string;
}>();

const sections = ref<string[]>();
const report = ref<ReportType>(
  props.category === "company" ? new CompanyReport("", "", "", "") : new IndustryReport("", "", ""),
);

watch(
  () => props.category,
  async (updated_category) => {
    if (updated_category === "company") {
      sections.value = ["name", "features", "ideal_talent", "news"];
      report.value = new CompanyReport("", "", "", "");
    }
    if (updated_category === "industry") {
      sections.value = ["type", "features", "news"];
      report.value = new IndustryReport("", "", "");
    }
  },
);
watchEffect(async () => {
  let data;

  if (props.category === "company") {
    data = await client.get<ReportDTO<CompanyDetailDTO>>("", {
      params: {
        category: props.category,
        createdAt: props.created_at,
      },
    });
  } else {
    data = await client.get<ReportDTO<IndustryDetailDTO>>("", {
      params: {
        category: props.category,
        createdAt: props.created_at,
      },
    });
  }

  if (data.status === 200) {
    const updated_category = data.data.category;
    const fetch_report = data.data.companyDetails[0];

    switch (updated_category) {
      case "company":
        report.value = new CompanyReport(
          (fetch_report as CompanyDetailDTO).companyName,
          (fetch_report as CompanyDetailDTO).companyFeatures,
          (fetch_report as CompanyDetailDTO).companyIdealTalent,
          (fetch_report as CompanyDetailDTO).companyNews,
        );
        break;
      case "industry":
        report.value = new IndustryReport(
          (fetch_report as IndustryDetailDTO).industryType,
          (fetch_report as IndustryDetailDTO).industryFeatures,
          (fetch_report as IndustryDetailDTO).industryNews,
        );
        break;
    }
    sections.value = Object.keys(report.value) as string[];
  }
});

function save() {
  console.log("report", report.value);
}
</script>
