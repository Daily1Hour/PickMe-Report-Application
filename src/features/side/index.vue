<template>
  <read-summaries @fetched="summaries = $event" />

  <div class="q-pa-md" style="max-width: 350px; position: sticky; top: 0; height: 100%">
    <q-list bordered separator>
      <q-item v-for="item in sorted_summaries" clickable v-ripple>
        <section-tab :summary="item" />
        <delete-report :category="item.category" :created_at="item.created_at" />
      </q-item>

      <q-item clickable v-ripple>
        <add-report />
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { SectionTab, ReadSummaries, AddReport, DeleteReport } from "./ui";
import { Summary } from "@/entities/summary/model";

const summaries = ref<Summary[]>([]);

const sorted_summaries = computed(() =>
  summaries.value.sort((a, b) => b.created_at.getTime() - a.created_at.getTime()),
);
</script>
