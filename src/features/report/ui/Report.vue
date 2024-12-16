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
import { computed } from "vue";
import Section from "./Section.vue";

const props = defineProps<{
  sections: [string, string, string, string];
  report: {
    companyName: string;
    companyFeatures: string;
    companyIdealTalent: string;
    companyNews: string;
  };
}>();

const reportList = computed(() => {
  return [
    props.report.companyName,
    props.report.companyFeatures,
    props.report.companyIdealTalent,
    props.report.companyNews,
  ];
});
</script>
