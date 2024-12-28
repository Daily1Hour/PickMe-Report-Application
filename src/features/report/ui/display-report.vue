<template>
  <div class="column fit">
    <q-list class="q-ma-md rounded-borders" bordered separator style="order: 1">
      <q-item v-for="field in fields" :key="field" v-ripple>
        <section-form :id="field" v-model="store.report[field as keyof Omit<ReportType, 'id'>]" />
      </q-item>
    </q-list>

    <div class="row justify-end" v-for="order in [0, 2]" :key="order" :style="{ order }">
      <save-report />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import SectionForm from "./section-form.vue";
import SaveReport from "./save-report.vue";
import { useReportStore } from "../store/report";
import { company_report_fields, industry_report_fields, ReportType } from "@/entities/report/model";
import { Category } from "@/shared/model/Category";

const store = useReportStore();

const fields = ref<readonly string[]>(
  store.category === Category.Company ? company_report_fields : industry_report_fields,
);
</script>
