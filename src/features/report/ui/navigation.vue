<template>
  <div class="q-pa-md" style="max-width: 350px; position: sticky; top: 0; height: 100%">
    <q-list bordered separator>
      <q-item tag="a" :href="'#' + section" v-for="section in sections" clickable v-ripple>
        <q-item-section>{{ sections_map[section as keyof Omit<ReportType, "id">] }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { useReportStore } from "../store/report";
import { company_report_keys, industry_report_keys, ReportType } from "@/entities/report/model";
import { Category } from "@/shared/model/Category";
import { sections_map } from "@/shared/trans/ko";

const store = useReportStore();

const sections = ref<string[]>([]);

store.$subscribe((_mutation, state) => {
  if (state.category === Category.Company) {
    sections.value = company_report_keys;
  } else if (state.category === Category.Industry) {
    sections.value = industry_report_keys;
  }
});
</script>
