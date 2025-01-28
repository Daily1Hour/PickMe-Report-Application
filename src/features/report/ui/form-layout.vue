<template>
  <form class="column" @submit="onSubmit">
    <slot />

    <actions-report :report_id="report.id" :is_valid="meta.valid" ref="actions_report" />
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

import { ReportSchemaType } from "../model";
import { map_form_to_report, map_report_to_form } from "../service";
import { useReportStore } from "../store/report";
import ActionsReport from "./actions-report.vue";

const { report, schema } = storeToRefs(useReportStore());

// 폼 정의
const { handleSubmit, setValues, meta } = useForm<ReportSchemaType>({
  validationSchema: toTypedSchema(schema.value),
  initialValues: map_report_to_form(report.value), // 엔터티 모델 → 폼 모델
});

// 폼 갱신
watch(report, (new_report) => setValues(map_report_to_form(new_report)), { immediate: true });

// 폼 제출
const actions_report = ref(); // 액션 컴포넌트 참조
const onSubmit = handleSubmit((values: ReportSchemaType) => {
  const report = map_form_to_report(values); // 폼 모델 → 엔터티 모델
  actions_report.value.onSubmit(report);
});
</script>
