import { computed, reactive } from "vue";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";

import { map_to_companyReport } from "../api/mapper";
import { ReportType } from "@/entities/report/model";
import { Category } from "@/shared/model/Category";

export const useReportStore = defineStore("report", () => {
  const route = useRoute();

  const id = computed(() => route.params.id as string);
  const category = computed(() => route.query.category as Category);
  const report = reactive<ReportType>(map_to_companyReport());

  return { report, category, id };
});
