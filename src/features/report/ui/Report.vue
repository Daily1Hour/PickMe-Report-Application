<template>
  <ul style="list-style-type: none; width: calc(100% - 150px)">
    <Section label="이름" caption="이름을 입력해주세요." v-model:content="report.companyName" />
    <Section label="특징" caption="특징을 입력해주세요." v-model:content="report.companyFeatures" />
    <Section
      label="인재상"
      caption="인재상을 입력해주세요."
      v-model:content="report.companyIdealTalent"
    />
    <Section label="뉴스" caption="뉴스를 입력해주세요." v-model:content="report.companyNews" />
  </ul>
</template>

<script setup lang="ts">
import Section from "./Section.vue";

defineProps<{
  report: {
    companyName: string;
    companyFeatures: string;
    companyIdealTalent: string;
    companyNews: string;
  };
}>();
</script>
