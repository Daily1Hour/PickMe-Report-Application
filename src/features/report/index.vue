<template>
  <div v-if="!!store.report" :key="$route.fullPath">
    <load-report />

    <navigation />

    <display-report />
  </div>
</template>

<script setup lang="ts">
import { LoadReport, Navigation, DisplayReport } from "./ui";
import { useReportStore } from "./store/report";

const store = useReportStore();
</script>
