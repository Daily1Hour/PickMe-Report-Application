<template>
  <div class="column" style="width: 1000px; margin-left: 400px">
    <form @submit="onSubmit">
      <q-list class="q-ma-md rounded-borders" bordered separator style="order: 1">
        <q-item v-for="(field, index) in form_fields" :key="index" v-ripple>
          <section-form :id="field.name as ReportKeys" v-model="field.value.value" />
        </q-item>
      </q-list>

      <div class="row justify-end" v-for="order in [0, 2]" :key="order" :style="{ order }">
        <save-report ref="saveReport" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

import SectionForm from "./section-form.vue";
import SaveReport from "./save-report.vue";
import { useReportStore } from "../store/report";
import { ReportKeys } from "@/entities/report/model";

// 상태 저장소
const store = useReportStore();
// 폼 필드 키
const fields = Object.keys(store.report);

// 폼 스키마
const reportSchema = yup.object(
  fields.reduce((acc, key) => {
    acc[key] = yup.string();
    return acc;
  }, {} as Record<string, yup.StringSchema>),
);

// 폼 유효성 검사
const { handleSubmit } = useForm({
  validationSchema: reportSchema,
  initialValues: store.report,
});

// 폼 필드
const form_fields = fields.map((field) => {
  return {
    ...useField(field),
    name: field,
  };
});

// 저장 컴포넌트 참조
const saveReport = ref();

// 폼 제출 핸들러
const onSubmit = handleSubmit((values) => {
  // 저장 컴포넌트의 mutate 함수 호출
  saveReport.value[0].mutate(values);
});
</script>
