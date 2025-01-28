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
import { useReportStore } from "../store/report";
import { map_dto_to_report } from "../service";
import { getReport } from "../api";
import { ReportDTO } from "../api/dto";

const route = useRoute();
const { id, category, report } = storeToRefs(useReportStore());

// 리포트 데이터 조회
const { data, isLoading } = useQuery<ReportDTO>({
  queryKey: [QueryKey.Report, id],
  queryFn: () => getReport(id.value),
  retry: false,
  enabled: !!id.value,
  staleTime: 100 * 60 * 5, // 5분
});

// 리포트 데이터 갱신
watch(
  data,
  (dto) => {
    // dto → 엔터티 모델
    report.value = map_dto_to_report(route.name as RouteName, dto, id.value, category.value);
  },
  { immediate: true },
);
</script>
