<template>
  <q-list separator>
    <q-item clickable v-ripple>
      <add-report-skeleton />
    </q-item>

    <q-item v-for="index in 5" :key="index" clickable v-ripple>
      <section-tab-skeleton animation="fade" />
    </q-item>
  </q-list>

  <pagination-skeleton animation="fade" />
</template>

<script setup lang="ts">
import PaginationSkeleton from "@/shared/ui/pagination-skeleton.vue";
import AddReportSkeleton from "./add-report-skeleton.vue";
import SectionTabSkeleton from "./section-tab-skeleton.vue";
</script>
