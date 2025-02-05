<template>
  <q-list separator>
    <q-item clickable v-ripple>
      <add-report-skeleton />
    </q-item>

    <q-item v-for="index in 5" :key="index" clickable v-ripple>
      <section-tab-skeleton />
    </q-item>
  </q-list>

  <pagination-skeleton />
</template>

<script setup lang="ts">
import AddReportSkeleton from "./add-report-skeleton.vue";
import SectionTabSkeleton from "./section-tab-skeleton.vue";
import PaginationSkeleton from "./pagination-skeleton.vue";
</script>
