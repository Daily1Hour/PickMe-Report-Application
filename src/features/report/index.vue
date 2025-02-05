<template>
  <div class="column q-mx-auto" style="max-width: 1024px">
    <load-report />

    <skeleton-transition v-model="show_skeleton">
      <template #skeleton>
        <navigation-skeleton />
        <display-report-skeleton />
      </template>
      <template #content>
        <navigation />
        <display-report />
      </template>
    </skeleton-transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";

import { useReportStore } from "./store";
import {
  LoadReport,
  Navigation,
  NavigationSkeleton,
  DisplayReport,
  DisplayReportSkeleton,
  SkeletonTransition,
} from "./ui";

const { report } = storeToRefs(useReportStore());

const show_skeleton = computed(() => !report.value);
</script>
