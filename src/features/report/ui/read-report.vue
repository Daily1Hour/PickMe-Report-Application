<template></template>

<script setup lang="ts">
import { watch } from "vue";
import { useRoute } from "vue-router";
import { useQuery } from "@tanstack/vue-query";

import { ReportDTO, CompanyDetailDTO, IndustryDetailDTO } from "../api/dto";
import { map_to_companyReport, map_to_industryReport } from "../api/mapper";
import { Category } from "@/shared/model/Category";
import client from "@/shared/api/client";

const props = defineProps<{
  category: Category;
  created_at: Date;
}>();

const emit = defineEmits(["fetched"]);

const route = useRoute();

const { data } = useQuery({
  queryKey: ["report", props.category, props.created_at],
  queryFn: fetch,
  retry: false,
});

watch(data, (data) => {
  emit("fetched", data);
});

async function fetch() {
  if (route.name === "detail") {
    const params = {
      category: props.category,
      createdAt: props.created_at.toISOString(),
    };

    const data = await client.get<ReportDTO>("", { params });

    if (data.status === 200) {
      const updated_category = data.data.category;

      switch (updated_category) {
        case Category.Company: {
          const fetch_report = data.data.companyDetails?.[0];
          return map_to_companyReport(fetch_report as CompanyDetailDTO);
        }
        case Category.Industry: {
          const fetch_report = data.data.industryDetails?.[0];
          return map_to_industryReport(fetch_report as IndustryDetailDTO);
        }
      }
    }
  }

  return props.category === Category.Company ? map_to_companyReport() : map_to_industryReport();
}
</script>
