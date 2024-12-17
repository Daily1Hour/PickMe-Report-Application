<template>
  <div class="row" style="height: 100%; width: calc(100% - 350px)">
    <Navigation :sections="section_names" />

    <Report :sections="section_names" :report="report" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { Navigation, Report } from "./ui";
import client from "../../shared/api/client";
import { CompanyReport, IndustryReport, ReportType } from "../../entities/report/model";
import { CompanyDetailDTO, IndustryDetailDTO, ReportDTO } from "../../pages/reports/api/dto";

const route = useRoute();
const section_names: [string, string, string, string] = ["이름", "특징", "인재상", "뉴스"];

const report = ref<ReportType>({
  name: "",
  type: "",
  features: "",
  ideal_talent: "",
  news: "",
});

const param_id = computed(() => route.params.id);

watch(param_id, async () => {
  const { category, createdAt } = route.query;

  const data = await client.get<ReportDTO>("", {
    params: {
      category,
      createdAt,
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
  }
});
</script>
