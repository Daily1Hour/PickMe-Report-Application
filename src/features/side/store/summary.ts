import { ref } from "vue";
import { defineStore } from "pinia";

import { Summary } from "@/entities/summary/model";

// 중앙 상태 저장소
export const useSummaryStore = defineStore("summary", () => {
  const summaries = ref<Summary[]>([]);

  return { summaries };
});
