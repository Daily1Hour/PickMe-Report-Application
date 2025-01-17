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
import { useQuery } from "@tanstack/vue-query";

import { getReport } from "../api";
import { ReportDTO } from "../api/dto";
import { map_dto_to_report } from "../service";
import { useReportStore } from "../store/report";
import { RouteName } from "@/shared/model/RouteName";
import { QueryKey } from "@/shared/model/QueryKey";

const route = useRoute();
const store = useReportStore();

// 리포트 데이터 조회
const { data: dto, isLoading } = useQuery<ReportDTO>({
  queryKey: [QueryKey.Report, store.id],
  queryFn: () => getReport(store.id),
  retry: false,
  enabled: !!store.id,
  staleTime: 100 * 60 * 5, // 5분
});

// dto를 엔터티 모델로 변환
const report = map_dto_to_report(route.name as RouteName, dto?.value, store.id, store.category);

// 리포트 상태 저장소 갱신
watch(
  report,
  () => {
    store.report = report;
  },
  { immediate: true },
);
</script>
