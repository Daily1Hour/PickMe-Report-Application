<template>
  <load-summaries @fetched="fetched" />
  <div class="q-pa-md" style="max-width: 350px; position: sticky; top: 0; height: 100%">
    <q-list bordered separator>
      <q-item v-for="summary in sorted_summaries" clickable v-ripple :key="updated_time(summary)">
        <section-tab :summary="summary" />
        <remove-report :category="summary.category" :created_at="summary.created_at" />
      </q-item>

      <q-item clickable v-ripple>
        <add-report />
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { SectionTab, LoadSummaries, AddReport, RemoveReport } from "./ui";
import { Summary } from "@/entities/summary/model";

const summaries = ref<Summary[]>([]);

const fetched = (data: Summary[]) => {
  summaries.value = data;
};

const sorted_summaries = computed(() =>
  summaries.value.sort((a, b) => b.created_at.getTime() - a.created_at.getTime()),
);

const updated_time = (summary: Summary) => summary.updated_at.toISOString();
</script>
