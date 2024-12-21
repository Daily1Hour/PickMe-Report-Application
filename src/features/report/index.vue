<template>
  <div class="row" style="height: 100%; width: calc(100% - 350px)">
    <navigation />

    <report :key="$route.fullPath" :category="query.category" :created_at="query.created_at" />
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { useRoute } from "vue-router";

import { Navigation, Report } from "./ui";
import { Category } from "@/shared/model/Category";
import { useReportStore } from "./store/report";

const route = useRoute();

const store = useReportStore();

store.category = route.query.category as Category;

watch(() => route.query.category as Category, (category) => {
  store.category = category;
});

const query = computed(() => {
  const { category, createdAt } = route.query as { category: Category; createdAt: string };
  const created_at = new Date(createdAt);
  return { category, created_at };
});
</script>
