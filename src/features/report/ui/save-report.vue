<template>
  <q-btn type="submit" :disable="!is_valid" :color="color" label="저장" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

import { setReport, SetType } from "../api";
import { map_report_to_dto } from "../service";
import { useReportStore } from "../store/report";
import { ReportType } from "@/entities/report/model";
import { RouteName, QueryKey } from "@/shared/model";

const route = useRoute();
const router = useRouter();
const queryClient = useQueryClient();
const { id, category } = storeToRefs(useReportStore());

// 유효 여부에 따른 버튼 색상
const { is_valid } = defineProps<{ is_valid: boolean }>();
const color = computed(() => (is_valid ? "teal-7" : "teal-3"));

const mutation = useMutation({
  mutationFn: (report: ReportType) => {
    // 엔터티 모델을 DTO로 변환
    const dto = map_report_to_dto(category.value, report);

    // 라우터에 Set 타입 할당
    const type = {
      [RouteName.New]: SetType.Make,
      [RouteName.Detail]: SetType.Edit,
    }[route.name as RouteName];

    return setReport(type, dto, id.value);
  },
  onSuccess: ({ data: { reportId: id } }) => {
    // 사이드 목록 갱신
    queryClient.refetchQueries({ queryKey: [QueryKey.Summaries] });

    // 생성 후 해당하는 리포트 페이지로 이동
    router.push({
      name: RouteName.Detail,
      params: { id },
    });
  },
});

// mutate 함수 호출 노출
defineExpose({
  mutate: mutation.mutate,
});
</script>
