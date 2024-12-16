<template>
  <div class="row" style="height: 100%; width: calc(100% - 350px)">
    <Navigation :items="section_names" />

    <Report :items="items" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

import { Navigation, Report } from "./ui";
import client from "../../shared/api/client";

const route = useRoute();

const section_names = ["이름", "특징", "인재상", "뉴스"];

const items = computed(async () => {
  const id = route.params.id;
  const { category, createdAt } = route.query;

  const data = await client.get("", {
    params: {
      category,
      createdAt,
    },
  });

  if (data.status === 200) {
    const { companyName, companyFeatures, companyIdealTalent, companyNews } =
      data.data.companyDetails[0];

    console.log(companyName, companyFeatures, companyIdealTalent, companyNews);

    return {
      companyName,
      companyFeatures,
      companyIdealTalent,
      companyNews,
    };
  }
});
</script>
