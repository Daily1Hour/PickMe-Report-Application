<template>
  <drawer-layout>
    <load-summaries />

    <skeleton-transition v-model="show_skeleton">
      <template #skeleton>
        <display-summaries-skeleton />
      </template>
      <template #content>
        <display-summaries />
      </template>
    </skeleton-transition>
  </drawer-layout>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";

import { useSummaryStore } from "./store";
import { SkeletonTransition } from "@/features/report/ui";
import { LoadSummaries, DisplaySummaries, DisplaySummariesSkeleton, DrawerLayout } from "./ui";

const { summaries } = storeToRefs(useSummaryStore());

const show_skeleton = computed(() => !summaries.value);
</script>
