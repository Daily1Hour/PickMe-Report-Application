<template>
  <q-btn type="submit" label="저장" />
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

import { setReport } from "../api";
import { useReportStore } from "../store/report";
import { ReportType } from "@/entities/report/model";
import { RouteName } from "@/shared/model/RouteName";
import { QueryKey } from "@/shared/model/QueryKey";

const route = useRoute();
const router = useRouter();
const queryClient = useQueryClient();
const store = useReportStore();

const mutation = useMutation({
  mutationFn: (values: ReportType) =>
    setReport(route.name as RouteName, store.category, store.id, values),
  onSuccess: ({ data: { reportId: id } }) => {
    // 사이드 목록 갱신
    queryClient.refetchQueries({ queryKey: [QueryKey.Summaries] });

    // 생성 후 해당하는 리포트 페이지로 이동
    router.push({
      name: RouteName.Detail,
      params: { id },
      query: { category: store.category },
    });
  },
});

// 함수 호출 노출
defineExpose({
  mutate: mutation.mutate,
});
</script>
