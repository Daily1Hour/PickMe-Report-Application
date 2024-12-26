<template></template>

<script setup lang="ts">
import { watch } from "vue";
import { useQueries } from "@tanstack/vue-query";

import { getSummaries } from "../api";
import { useSummaryStore } from "../store/summary";
import { Summary } from "@/entities/summary/model";
import { Category } from "@/shared/model/Category";
import { QueryKey } from "@/shared/model/QueryKey";

const emit = defineEmits(["fetched"]);

const store = useSummaryStore();

const data = useQueries({
  queries: [Category.Company, Category.Industry].map((category) => ({
    queryKey: [QueryKey.Summaries, category],
    queryFn: getSummaries,
    initialData: [],
    retry: false,
  })),
  combine: (results) => results.map((result) => result.data).flat() as Summary[],
});

watch(data, (queries) => {
  store.summaries = queries;
});
</script>
