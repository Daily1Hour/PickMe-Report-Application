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
import { map_to_companyReport, map_to_industryReport } from "./api/mapper";
import { Category } from "@/shared/model/Category";
import { useReportStore } from "./store/report";

const route = useRoute();

const store = useReportStore();

watch(
  () => route.params.id as string,
  (id) => {
    store.id = id;
  },
);
watch(
  () => route.query.category as Category,
  (category) => {
    store.category = category;
  },
);
watch(
  () => route.name && route.query.category,
  () => {
    switch (route.query.category) {
      case Category.Company:
        store.report = map_to_companyReport();
        break;
      case Category.Industry:
        store.report = map_to_industryReport();
        break;
    }
  },
);
</script>
