<template></template>

<script setup lang="ts">
import { watch } from "vue";
import { useQuery } from "@tanstack/vue-query";

import { ReportDTO } from "../api/dto";
import { map_to_summary } from "../api/mapper";
import { Category } from "@/shared/model/Category";
import client from "@/shared/api/client";
import { Summary } from "@/entities/summary/model";

const emit = defineEmits(["fetched"]);

const fetch = async (category: Category) => {
  const result = await client.get<ReportDTO[]>("/list", {
    params: {
      category,
    },
  });

  if (result.status === 200) {
    return result.data.map(map_to_summary) || [];
  }
  return [];
};

const { data } = useQuery<Summary[]>({
  queryKey: ["summaries"],
  queryFn: () => fetch(Category.Company),
  initialData: [],
});

watch(data, (data) => {
  emit("fetched", [...data]);
});
</script>
