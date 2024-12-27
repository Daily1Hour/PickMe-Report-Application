<template>
  <div class="q-ma-md q-mt-xl fixed-left" style="z-index: 5">
    <q-tabs class="bg-white" vertical bordered separator>
      <q-route-tab v-for="section in sections" :href="'#' + section" clickable v-ripple>
        {{ sections_map[section as keyof Omit<ReportType, "id">] }}
      </q-route-tab>
    </q-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

import { useReportStore } from "../store/report";
import { company_report_fields, industry_report_fields, ReportType } from "@/entities/report/model";
import { Category } from "@/shared/model/Category";
import { sections_map } from "@/shared/trans/ko";

const store = useReportStore();

const sections = ref<readonly string[]>([]);

watch(
  () => store.category,
  (category) => {
    if (category === Category.Company) {
      sections.value = company_report_fields;
    } else if (category === Category.Industry) {
      sections.value = industry_report_fields;
    }
  },
);
</script>
