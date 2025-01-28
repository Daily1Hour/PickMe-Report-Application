<template>
  <q-list class="q-ma-md rounded-borders" bordered separator>
    <q-item v-for="(field, index) in fields" :key="index" v-ripple>
      <section-field
        :field="field"
        v-model="form_fields[field].value.value"
        :error="form_fields[field].errorMessage.value"
      />
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useField } from "vee-validate";

import { CompanyReport, IndustryReport, ReportKeys } from "@/entities/report/model";
import { useReportStore } from "../store";
import SectionField from "./section-field.vue";

// 상태 저장소에서 현재 report 데이터 읽음
const { report } = storeToRefs(useReportStore());

// 폼 필드 리스트 정의
const form_fields = Object.fromEntries(
  [...CompanyReport.keys, ...IndustryReport.keys].map((field) => [field, useField(field)]),
);

// 폼 필드 키
const fields = computed(
  () => Object.keys(report.value!).filter((field) => field !== "id") as ReportKeys[],
);
</script>
