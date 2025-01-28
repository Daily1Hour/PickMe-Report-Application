<template>
  <q-btn type="submit" :disable="!is_valid" :color="is_valid ? 'teal-7' : 'teal-3'" label="저장" />
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

import { RouteName, QueryKey } from "@/shared/model";
import { ReportType } from "@/entities/report/model";
import { setReport, typeMap } from "../api";
import { map_report_to_dto } from "../service";
import { useReportStore } from "../store/report";

const route = useRoute();
const router = useRouter();
const queryClient = useQueryClient();
const { id, category } = storeToRefs(useReportStore());
const { is_valid } = defineProps<{ is_valid: boolean }>();

const mutation = useMutation({
  mutationFn: (report: ReportType) => {
    const dto = map_report_to_dto(category.value, report); // 엔터티 모델 → DTO
    const type = typeMap[route.name as RouteName]; // 라우터에 Set 타입 할당

    // 리포트 생성 또는 수정
    return setReport(type, dto, id.value);
  },
  onSuccess: ({ data: { reportId: id } }) => {
    queryClient.refetchQueries({ queryKey: [QueryKey.Summaries] }); // 사이드 목록 갱신

    // 생성 후 해당하는 리포트 페이지로 이동
    router.push({
      name: RouteName.Detail,
      params: { id },
    });
  },
});

defineExpose({ mutate: mutation.mutate }); // mutate 함수 호출 노출
</script>
