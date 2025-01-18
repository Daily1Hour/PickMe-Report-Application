<template>
  <div @click="(event: Event) => event.stopPropagation()">
    <q-list separator>
      <q-item clickable v-ripple>
        <add-report />
      </q-item>

      <q-item
        v-for="summary in current_items"
        :key="summary.updated_at.getTime()"
        clickable
        v-ripple
      >
        <section-tab :summary="summary" />
      </q-item>
    </q-list>

    <div class="flex flex-center">
      <q-pagination v-model="current_page" :max="max_page" input />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useSummaryStore } from "../store/summary";
import { SectionTab, AddReport } from "../ui";
import { usePagination } from "@/shared/hook";

// 상태 저장소에서 데이터 가져오기
const summaries = computed(() => useSummaryStore().summaries);
const search = computed(() => useSummaryStore().search);

// 최신순 정렬
const sorted_summaries = computed(() =>
  summaries.value.toSorted((a, b) => b.updated_at.getTime() - a.updated_at.getTime()),
);

const searched_summaries = computed(() =>
  sorted_summaries.value.filter((summary) =>
    summary.name?.toLowerCase().includes(search.value.toLowerCase()),
  ),
);

// 페이지네이션
const { current_page, current_items, max_page } = usePagination(searched_summaries, 5);
</script>
