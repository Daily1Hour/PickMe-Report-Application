<template>
  <div class="row" style="height: 100%; width: calc(100% - 350px)">
    <navigation :category="query.category" />

    <report :key="$route.fullPath" :category="query.category" :created_at="query.created_at" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import { Navigation, Report } from "./ui";
import { Category } from "@/shared/model/Category";

const route = useRoute();
const query = computed(() => {
  const { category, createdAt } = route.query as { category: Category; createdAt: string };
  const created_at = new Date(createdAt);
  return { category, created_at };
});
</script>
