<template>
  <load-summaries />

  <q-fab color="secondary" icon="menu" direction="down" style="height: 50px">
    <q-fab-action style="transform: translateX(50%); background: white">
      <div class="q-pa-md" style="max-width: 350px; position: sticky; top: 0; height: 100%">
        <q-list bordered separator>
          <q-item clickable v-ripple>
            <add-report />
          </q-item>

          <q-item
            v-for="summary in pagination_list"
            clickable
            v-ripple
            :key="updated_time(summary)"
          >
            <section-tab :summary="summary" />
            <remove-report :category="summary.category" :created_at="summary.created_at" />
          </q-item>
        </q-list>

        <div class="flex flex-center">
          <q-pagination v-model="current" :max="pagination_max" input />
        </div>
      </div>
    </q-fab-action>
  </q-fab>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import { SectionTab, LoadSummaries, AddReport, RemoveReport } from "./ui";
import { useSummaryStore } from "./store/summary";
import { Summary } from "@/entities/summary/model";

const store = useSummaryStore();

const sorted_summaries = computed(() =>
  store.summaries.sort((a, b) => b.created_at.getTime() - a.created_at.getTime()),
);

const current = ref(1);

const pagination_max = computed(() => store.summaries.length / 5 + 1);

const pagination_list = computed(() => {
  const start = (current.value - 1) * 5;
  const end = current.value * 5;

  return sorted_summaries.value.slice(start, end);
});

const updated_time = (summary: Summary) => summary.updated_at.toISOString();
</script>
