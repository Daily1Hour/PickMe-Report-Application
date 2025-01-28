<template>
  <div class="q-ma-md q-mt-xl fixed-right" title="네비게이션">
    <q-tabs class="bg-white" vertical bordered separator>
      <q-route-tab v-for="section in sections" :href="'#' + section" clickable v-ripple>
        {{ sections_map[section] }}
      </q-route-tab>
    </q-tabs>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useReportStore } from "../store/report";
import { ReportKeys } from "@/entities/report/model";
import { sections_map } from "@/shared/trans/ko";

const store = useReportStore();
// 네비게이션 섹션 리스트
const sections = computed(() => Object.keys(store.report!) as ReportKeys[]);
</script>
