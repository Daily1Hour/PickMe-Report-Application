<template></template>

<script setup lang="ts">
import { onMounted } from "vue";

import { ReportDTO } from "../api/dto";
import { map_to_summary } from "../api/mapper";
import { Category } from "@/shared/model/Category";
import client from "@/shared/api/client";

const emit = defineEmits(["fetched"]);

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
  const result = [...companies, ...industries];
  emit("fetched", result);
});
</script>
