<template>
  <div class="row" style="height: 100%; width: calc(100% - 350px)">
    <Navigation :category="query.category" />

    <Report :report="report" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

import { Navigation, Report } from "./ui";

import { CompanyReport, IndustryReport, ReportType } from "@/entities/report/model";
import { CompanyDetailDTO, IndustryDetailDTO, ReportDTO } from "@/shared/api/dto";
import client from "@/shared/api/client";

const route = useRoute();
const report_keys = ref<string[]>([]);

const report = ref<ReportType>({
  name: "",
  type: "",
  features: "",
  ideal_talent: "",
  news: "",
});

const param_id = computed(() => route.params.id);
const query = computed(() => {
  return {
    category: route.query.category as string,
    createdAt: route.query.createdAt as string,
  };
});

watch(param_id, async () => {
  const data = await client.get<ReportDTO>("", {
    params: {
      category: query.value.category,
      createdAt: query.value.createdAt,
    },
  });

  if (data.status === 200) {
    const category = data.data.category;
    const reportData = data.data.companyDetails[0];

    switch (category) {
      case "company":
        report.value = new CompanyReport(
          (reportData as CompanyDetailDTO).companyName,
          (reportData as CompanyDetailDTO).companyFeatures,
          (reportData as CompanyDetailDTO).companyIdealTalent,
          (reportData as CompanyDetailDTO).companyNews,
        );
        break;
      case "industry":
        report.value = new IndustryReport(
          (reportData as IndustryDetailDTO).industryType,
          (reportData as IndustryDetailDTO).industryFeatures,
          (reportData as IndustryDetailDTO).industryNews,
        );
        break;
    }

    report_keys.value = Object.keys(report.value);
  }
});
</script>
