<template>
  <div class="row" style="height: 100%; width: calc(100% - 350px)">
    <Navigation :category="query.category" />

    <Report :key="$route.fullPath" :category="query.category" :created_at="query.created_at" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import { Navigation, Report } from "./ui";
import { Category } from "@/entities/report/model/Category";

const route = useRoute();
const query = computed(() => {
  return {
    category: route.query.category as Category,
    created_at: route.query.createdAt as string,
  };
});
</script>
