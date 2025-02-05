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
import { storeToRefs } from "pinia";

import { usePagination } from "@/shared/hook";
import { useSummaryStore } from "../store";
import AddReport from "./add-report.vue";
import SectionTab from "./section-tab.vue";

// 상태 저장소에서 데이터 가져오기
const { summaries, search } = storeToRefs(useSummaryStore());

// 최신순 정렬
const sorted_summaries = computed(() =>
  summaries.value!.toSorted((a, b) => b.updated_at.getTime() - a.updated_at.getTime()),
);
// 검색어로 필터링
const searched_summaries = computed(() =>
  sorted_summaries.value.filter((summary) =>
    summary.name?.toLowerCase().includes(search.value.toLowerCase()),
  ),
);

// 페이지네이션
const { current_page, current_items, max_page } = usePagination(searched_summaries, 5);
</script>
