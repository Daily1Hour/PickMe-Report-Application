<template>
  <div class="row" style="height: 100%; width: calc(100% - 350px)">
    <Navigation :sections="section_names" />

    <Report :sections="section_names" :report="report" />
  </div>
</template>

<script setup>
import { ref, computed, reactive, watch } from "vue";
import { useRoute } from "vue-router";
import { Navigation, Report } from "./ui";
import client from "../../shared/api/client";

const route = useRoute();
const section_names = ["이름", "특징", "인재상", "뉴스"];
const report = ref({
  companyName: "",
  companyFeatures: "",
  companyIdealTalent: "",
  companyNews: "",
});

const param_id = computed(() => route.params.id);

watch(param_id, async () => {
  const { category, createdAt } = route.query;

  const data = await client.get("", {
    params: {
      category,
      createdAt,
    },
  });
  if (data.status === 200) {
    report.value = data.data.companyDetails[0];
  }
});
</script>
