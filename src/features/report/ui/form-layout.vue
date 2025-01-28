<template>
  <form class="column" @submit="onSubmit">
    <slot />

    <actions-report :report_id="report.id" :is_valid="meta.valid" ref="actions_report" />
  </form>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

import { CompanyReport, IndustryReport } from "@/entities/report/model";
import { companySchema, industrySchema } from "../model";
import { useReportStore } from "../store/report";
import ActionsReport from "./actions-report.vue";

// 상태 저장소에서 현재 report 데이터 읽음
const { report } = storeToRefs(useReportStore());

// 스키마 동적 정의
const schema = computed(() => {
  if (report.value instanceof CompanyReport) {
    return companySchema;
  }
  if (report.value instanceof IndustryReport) {
    return industrySchema;
  }
  throw new Error("Invalid report type");
});
// 폼 정의
const { handleSubmit, setValues, meta } = useForm({
  validationSchema: toTypedSchema(schema.value),
  initialValues: report.value,
});

// 폼 갱신
watch(report, (new_report) => setValues(new_report as any), { immediate: true });

// 액션 컴포넌트 참조
const actions_report = ref();
// 폼 제출 핸들러
const onSubmit = handleSubmit((values) => {
  actions_report.value.onSubmit(values);
});
</script>
