<template>
  <q-btn type="submit" label="저장" :color="color" />
</template>

<script setup lang="ts">
import { computed } from "vue";
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

// 유효 여부에 따른 버튼 색상
const { is_valid } = defineProps<{ is_valid: boolean }>();
const color = computed(() => (is_valid ? "green-7" : "grey-3"));

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

// mutate 함수 호출 노출
defineExpose({
  mutate: mutation.mutate,
});
</script>
