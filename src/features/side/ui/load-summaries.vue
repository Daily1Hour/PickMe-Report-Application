<template></template>

<script setup lang="ts">
import { watch } from "vue";
import { useQuery } from "@tanstack/vue-query";

import { QueryKey } from "@/shared/model";
import { useSummaryStore } from "../store/summary";
import { map_to_summary } from "../service/mapper";
import { getSummaries } from "../api";

// 상태 저장소
const store = useSummaryStore();

// 쿼리
const { data } = useQuery({
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
</script>
