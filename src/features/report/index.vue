<template>
  <div class="column q-mx-auto" style="max-width: 1024px">
    <load-report />

    <skeleton-transition v-model="show_skeleton">
      <template #skeleton>
        <navigation-skeleton animation="fade" />
        <display-report-skeleton animation="fade" />
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
import { SkeletonTransition } from "@/shared/ui";
import {
  LoadReport,
  Navigation,
  NavigationSkeleton,
  DisplayReport,
  DisplayReportSkeleton,
} from "./ui";

const { report } = storeToRefs(useReportStore());

const show_skeleton = computed(() => !report.value);
</script>
