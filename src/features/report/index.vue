<template>
  <div :key="$route.fullPath" class="column q-mx-auto" style="max-width: 1024px">
    <load-report />

    <navigation />

    <display-report v-if="!!store.report" />
  </div>
</template>

<script setup lang="ts">
import { useReportStore } from "./store/report";
import { LoadReport, Navigation, DisplayReport } from "./ui";

const store = useReportStore();
</script>
