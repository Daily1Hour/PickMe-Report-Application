<template>
  <div class="row" style="height: 100%; width: calc(100% - 350px)">
    <navigation />

    <report :key="$route.fullPath" />
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useRoute } from "vue-router";

import { Navigation, Report } from "./ui";
import { Category } from "@/shared/model/Category";
import { useReportStore } from "./store/report";

const route = useRoute();

const store = useReportStore();

watch(
  () => route.query.category as Category,
  (category) => {
    store.category = category;
  },
);
watch(
  () => route.query.createdAt as string,
  (created_at) => {
    store.created_at = new Date(created_at);
  },
);
</script>
