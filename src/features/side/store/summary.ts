import { ref } from "vue";
import { defineStore } from "pinia";

import { Summary } from "@/entities/summary/model";

// 중앙 상태 저장소
export default defineStore("summary", () => {
  const summaries = ref<Summary[]>([]);
  const searching = ref(false);
  const search = ref<string>(""); // 검색어

  return { summaries, search, searching };
});
