<template>
  <ul style="list-style-type: none; width: calc(100% - 150px)">
    <li v-for="(sectionItem, index) in sections" :key="index">
      <Section
        :label="sectionItem"
        :caption="sectionItem + '을 입력해주세요.'"
        v-model:content="reportList[index]"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";
import Section from "./Section.vue";
import { ReportType } from "../../../entities/report/model";

const props = defineProps<{
  sections: [string, string, string, string];
  report: ReportType;
}>();

const reportList = ref<string[]>([]);

watch(
  () => props.report,
  (new_report) => {
    reportList.value = Object.values(new_report);
  },
);
</script>
