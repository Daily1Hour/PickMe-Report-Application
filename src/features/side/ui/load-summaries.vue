<template></template>

<script setup lang="ts">
import { watch } from "vue";
import { useQuery } from "@tanstack/vue-query";

import { getSummaries } from "../api";
import { map_to_summary } from "../service/mapper";
import { useSummaryStore } from "../store/summary";
import { QueryKey } from "@/shared/model/QueryKey";

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
  // dto를 엔터티 모델로 변환
  const summaries = summaryDTOs.map(map_to_summary) || [];

  // 요약 상태 저장소 갱신
  store.summaries = summaries;
});
</script>
