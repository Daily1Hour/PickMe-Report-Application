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
import { useReportStore } from "../store/report";
import { ReportType } from "@/entities/report/model";
import { RouteName } from "@/shared/model/RouteName";
import { QueryKey } from "@/shared/model/QueryKey";

const route = useRoute();
const store = useReportStore();

// 리포트 데이터 조회
const { data, isLoading } = useQuery<ReportType>({
  queryKey: [QueryKey.Report, store.id, store.category],
  queryFn: () => getReport(route.name as RouteName, store.id, store.category),
  retry: false,
  staleTime: 100 * 60 * 5, // 5분
});

// 리포트 상태 저장소 갱신
watch(
  data,
  (data) => {
    if (!!data) {
      store.report = data;
    }
  },
  { immediate: true },
);
</script>
