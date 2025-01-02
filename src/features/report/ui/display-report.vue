<template>
  <div class="column q-mx-auto" style="max-width: 1024px">
    <form @submit="onSubmit">
      <q-list class="q-ma-md rounded-borders" bordered separator style="order: 1">
        <q-item v-for="(field, index) in fields" :key="index" v-ripple>
          <section-form
            :id="field as ReportKeys"
            v-model="form_fields[field].value.value"
            :error="form_fields[field].errorMessage.value"
          />
        </q-item>
      </q-list>

      <div class="row justify-end" v-for="order in [0, 2]" :key="order" :style="{ order }">
        <save-report ref="saveReport" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, ref } from "vue";
import { useField, useForm } from "vee-validate";

import SectionForm from "./section-form.vue";
import SaveReport from "./save-report.vue";
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
const { handleSubmit, setValues } = useForm({
  validationSchema: schema,
  initialValues: report,
});

// 폼 필드 리스트 정의
const form_fields = report_fields.reduce((acc, field) => {
  acc[field] = useField(field); // 필드 속성 구조분해
  return acc;
}, {} as Record<string, ReturnType<typeof useField>>);

// 폼 필드 키
const fields = computed(() => Object.keys(report.value).filter((field) => field !== "id"));

// 폼 갱신
watch(report, (new_report) => setValues(new_report as any), { immediate: true });

// 저장 컴포넌트 참조
const saveReport = ref();

// 폼 제출 핸들러
const onSubmit = handleSubmit((values) => {
  // 저장 컴포넌트의 mutate 함수 호출
  saveReport.value[0].mutate(values);
});
</script>
