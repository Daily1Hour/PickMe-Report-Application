<template></template>

<script setup lang="ts">
import { watch } from "vue";
import { useQuery } from "@tanstack/vue-query";

import { QueryKey } from "@/shared/model";
import { useSummaryStore } from "../store";
import { map_to_summary } from "../service";
import { getSummaries } from "../api";

// 상태 저장소
const store = useSummaryStore();

// 쿼리
const { data, isError } = useQuery({
  queryKey: [QueryKey.Summaries],
  queryFn: getSummaries,
  initialData: [],
  retry: false,
});

// 페칭 완료 후 상태 저장
watch(data, (summaryDTOs) => {
  const summaries = summaryDTOs.map(map_to_summary) || []; // dto →  엔터티 모델

  // 요약 상태 저장소 갱신
  store.summaries = summaries;
});
// 에러 발생 시 요약 초기화
watch(isError, () => {
  store.summaries = null;
});
</script>
