<template>
  <div>
    <form class="column" @submit="onSubmit">
      <q-list class="q-ma-md rounded-borders" bordered separator style="order: 1">
        <q-item v-for="(field, index) in fields" :key="index" v-ripple>
          <section-form
            :id="field as ReportKeys"
            v-model="form_fields[field].value.value"
            :error="form_fields[field].errorMessage.value"
          />
        </q-item>
      </q-list>

      <actions-report :report_id="report.id" :is_valid="meta.valid" ref="actions_report" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useField, useForm } from "vee-validate";

import SectionForm from "./section-form.vue";
import ActionsReport from "./actions-report.vue";
import { useReportStore } from "../store/report";
import { companySchema, industrySchema } from "../model";
import { CompanyReport, IndustryReport, report_fields, ReportKeys } from "@/entities/report/model";

// 상태 저장소에서 데이터 가져오기
const report = computed(() => useReportStore().report);

// 스키마 동적 정의
const schema = computed(() => {
  if (report.value instanceof CompanyReport) {
    return companySchema;
  }
  if (report.value instanceof IndustryReport) {
    return industrySchema;
  }
});
// 폼 정의
const { handleSubmit, setValues, meta } = useForm({
  validationSchema: schema,
  initialValues: report,
});
// 폼 필드 리스트 정의
const form_fields = Object.fromEntries(report_fields.map((field) => [field, useField(field)]));

// 폼 필드 키
const fields = computed(() => Object.keys(report.value).filter((field) => field !== "id"));
// 폼 갱신
watch(report, (new_report) => setValues(new_report as any), { immediate: true });

// 액션 컴포넌트 참조
const actions_report = ref();
// 폼 제출 핸들러
const onSubmit = handleSubmit((values) => {
  actions_report.value.onSubmit(values);
});
</script>
