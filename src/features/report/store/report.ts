import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";

import { ReportType } from "@/entities/report/model";
import { Category } from "@/shared/model/Category";

// 중앙 상태 저장소
export const useReportStore = defineStore("report", () => {
  const route = useRoute();

  const id = computed(() => route.params.id as string);
  const category = computed(() => history.state.category as Category);
  const report = ref<ReportType>({} as ReportType);

  return { report, category, id };
});
