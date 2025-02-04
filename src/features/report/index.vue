<template>
  <div class="column q-mx-auto" style="max-width: 1024px">
    <load-report />

    <navigation v-if="!!report" />

    <display-report v-if="!!report" />
    <display-report-skeleton v-else />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useReportStore } from "./store";
import { LoadReport, Navigation, DisplayReport, DisplayReportSkeleton } from "./ui";

const { report } = storeToRefs(useReportStore());
</script>
