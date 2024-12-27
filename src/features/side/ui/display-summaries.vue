<template>
  <div class="q-pa-md" @click="(event: Event) => event.stopPropagation()">
    <q-list bordered separator>
      <q-item clickable v-ripple>
        <add-report />
      </q-item>

      <q-item v-for="summary in current_items" :key="summary.id" clickable v-ripple>
        <section-tab :summary="summary" />

        <remove-report :id="summary.id" />
      </q-item>
    </q-list>

    <div class="flex flex-center">
      <q-pagination v-model="current_page" :max="max_page" input />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { SectionTab, AddReport, RemoveReport } from "../ui";
import { useSummaryStore } from "../store/summary";
import { usePagination } from "@/shared/hook";

// 상태 저장소
const store = useSummaryStore();

// 최신순 정렬
const sorted_summaries = computed(() =>
  store.summaries.toSorted((a, b) => b.created_at.getTime() - a.created_at.getTime()),
);

// 페이지네이션
const { current_page, current_items, max_page } = usePagination(sorted_summaries, 5);
</script>
