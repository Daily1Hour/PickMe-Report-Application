import { reactive, ref } from "vue";
import { defineStore } from "pinia";

import { map_to_companyReport } from "../api/mapper";
import { ReportType } from "@/entities/report/model";
import { Category } from "@/shared/model/Category";

export const useReportStore = defineStore("report", () => {
  const report = reactive<ReportType>(map_to_companyReport());
  const category = ref<Category>(Category.Company);
  const created_at = ref<Date>(new Date());

  return { report, category, created_at };
});
