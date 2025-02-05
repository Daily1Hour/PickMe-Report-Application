<template>
  <div class="column q-mx-auto" style="max-width: 1024px">
    <load-report />

    <transition name="fade" mode="out-in">
      <div v-if="show_skeleton" key="skeleton">
        <navigation-skeleton />
        <display-report-skeleton />
      </div>

      <div v-else key="content">
        <navigation />
        <display-report />
      </div>
    </transition>
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
} from "./ui";

const { report } = storeToRefs(useReportStore());

const show_skeleton = computed(() => !report.value);
</script>

<style scoped>
/* 페이드 애니메이션 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
