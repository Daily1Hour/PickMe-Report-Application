<template>
  <q-inner-loading
    :showing="isLoading"
    label="Please wait..."
    label-class="text-teal"
    label-style="font-size: 1.1em"
  />
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useQuery } from "@tanstack/vue-query";

import { RouteName, QueryKey } from "@/shared/model";
import { useReportStore } from "../store";
import { map_dto_to_report } from "../service";
import { getReport, ReportDTO } from "../api";

const route = useRoute();
const { id, category, report } = storeToRefs(useReportStore());

// 리포트 데이터 조회
const { data, isLoading } = useQuery<ReportDTO>({
  queryKey: [QueryKey.Report, id, category], // 생성하기는 category로 구분하여 리패칭
  queryFn: () => getReport(id.value),
  retry: false,
  staleTime: 100 * 60 * 5, // 5분
});

// 리포트 데이터 갱신
watch(
  [data, category], // 생성하기는 category로 구분하여 감지
  ([dto]) => {
    // dto → 엔터티 모델
    const result = map_dto_to_report(route.name as RouteName, dto, id.value, category.value);
    // queryFn이 호출되기 전에는 기존 데이터 유지
    report.value = result ?? report.value;
  },
  {
    immediate: true, // 생성하기 페이지 접근
  },
);
</script>
