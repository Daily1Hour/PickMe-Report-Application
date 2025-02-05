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
import { getReport, getHealthy, ReportDTO } from "../api";

const route = useRoute();
const { id, category, report } = storeToRefs(useReportStore());

// 리포트 데이터 조회
const { data, isLoading } = useQuery<ReportDTO | null>({
  queryKey: [QueryKey.Report, id],
  queryFn: () => {
    if (route.name === RouteName.New) {
      return getHealthy(); // 생성하기 페이지에서는 healthCheck로 검사
    }
    return getReport(id.value);
  },
  retry: false,
  staleTime: 100 * 60 * 5, // 5분
});

// 리포트 데이터 갱신
watch(
  [data, category], // 생성하기는 category로 구분하여 감지
  ([dto]) => {
    if (dto === undefined) return; // 비동기 queryFn 호출 전

    // dto → 엔터티 모델
    report.value = map_dto_to_report(route.name as RouteName, dto, id.value, category.value);
  },
  {
    immediate: true, // 생성하기 페이지로 이동 시에도 즉시 호출
  },
);
</script>
