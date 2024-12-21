import { ref } from "vue";
import { defineStore } from "pinia";

import { Summary } from "@/entities/summary/model";

export const useSummaryStore = defineStore("summary", () => {
  const summaries = ref<Summary[]>([]);

  return { summaries };
});
