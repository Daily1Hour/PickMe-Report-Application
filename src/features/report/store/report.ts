import { computed, shallowRef } from "vue";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";
import { toTypedSchema } from "@vee-validate/zod";

import { Category } from "@/shared/model";
import { CompanyReport, IndustryReport, ReportType } from "@/entities/report/model";
import { companySchema, industrySchema } from "../model";

// 중앙 상태 저장소
export const useReportStore = defineStore("report", () => {
  const route = useRoute();

  const id = computed(() => route.params.id as string);
  const category = computed(() => (route.query.category as Category) || Category.Company);
  const report = shallowRef<ReportType>();

  // 스키마 동적 정의
  const schema = computed(() => {
    if (report.value instanceof CompanyReport) {
      return toTypedSchema(companySchema);
    }
    if (report.value instanceof IndustryReport) {
      return toTypedSchema(industrySchema);
    }
    throw new Error("Invalid report type");
  });

  return { id, category, report, schema };
});
