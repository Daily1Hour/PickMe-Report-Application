<template>
  <div class="fixed-top-right q-ma-md row justify-end q-gutter-sm">
    <remove-report v-if="report_id" :id="report_id" />
    <save-report :is_valid="is_valid" ref="save_report" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { ReportType } from "@/entities/report/model";
import SaveReport from "./save-report.vue";
import RemoveReport from "./remove-report.vue";

const { report_id, is_valid } = defineProps<{ report_id: string | null; is_valid: boolean }>();

// 폼 제출 핸들러
const save_report = ref(); // 저장 컴포넌트 참조
defineExpose({
  // 저장 컴포넌트의 mutate 함수 호출
  onSubmit: (values: ReportType) => save_report.value.mutate(values),
});
</script>
