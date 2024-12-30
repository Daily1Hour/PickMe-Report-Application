<template>
  <q-btn type="submit" label="저장" />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

import { setReport } from "../api";
import { useReportStore } from "../store/report";
import { ReportType } from "@/entities/report/model";
import { RouteName } from "@/shared/model/RouteName";
import { QueryKey } from "@/shared/model/QueryKey";

const route = useRoute();
const queryClient = useQueryClient();
const store = useReportStore();

const mutation = useMutation({
  mutationFn: (values: ReportType) =>
    setReport(route.name as RouteName, store.category, store.id, values),
  onSuccess: () => {
    queryClient.refetchQueries({ queryKey: [QueryKey.Summaries] });
  },
});

// 함수 호출 노출
defineExpose({
  mutate: mutation.mutate,
});
</script>
