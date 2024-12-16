<template>
  <ul style="list-style-type: none; width: calc(100% - 150px)">
    <Section label="이름" caption="이름을 입력해주세요." :content="companyName" />
    <Section label="특징" caption="특징을 입력해주세요." :content="companyFeatures" />
    <Section label="인재상" caption="인재상을 입력해주세요." :content="companyIdealTalent" />
    <Section label="뉴스" caption="뉴스를를 입력해주세요." :content="companyNews" />
  </ul>
</template>

<script setup lang="ts">
import Section from "./Section.vue";

const props = defineProps<{
  report: {
    companyName: string;
    companyFeatures: string;
    companyIdealTalent: string;
    companyNews: string;
  };
}>();
const { companyName, companyFeatures, companyIdealTalent, companyNews } = props.report;
</script>
