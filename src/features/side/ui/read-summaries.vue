<template></template>

<script setup lang="ts">
import { watch } from "vue";
import { QueryObserverResult, useQueries } from "@tanstack/vue-query";

import { getSummaries } from "../api";
import { Summary } from "@/entities/summary/model";
import { Category } from "@/shared/model/Category";

const emit = defineEmits(["fetched"]);

const data = useQueries<Summary[]>({
  queries: [Category.Company, Category.Industry].map((category) => ({
    queryKey: ["summaries", category],
    queryFn: () => getSummaries(category),
    initialData: [],
    retry: false,
  })),
  combine: (results) =>
    results.map((result) => result.data).flat() as QueryObserverResult<Summary>[],
});

watch(data, (data) => {
  emit("fetched", data);
});
</script>
