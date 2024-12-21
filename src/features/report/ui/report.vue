<template :key="$route.fullPath">
  <load-report :category="props.category" :created_at="props.created_at" />

  <div class="column" style="width: calc(100% - 150px)">
    <ul style="list-style-type: none; order: 1">
      <li v-for="title in titles" :key="title">
        <section-form :id="title" />
      </li>
    </ul>
    <div class="row justify-end" v-for="order in [0, 2]" :key="order" :style="{ order }">
      <save-report
        :category="props.category"
        :created_at="props.created_at"
        :report="store.report"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import LoadReport from "./load-report.vue";
import SectionForm from "./section-form.vue";
import SaveReport from "./save-report.vue";
import { useReportStore } from "../store/report";
import { Category } from "@/shared/model/Category";

const props = defineProps<{
  category: Category;
  created_at: Date;
}>();

const store = useReportStore();

const titles = ref<string[]>(
  props.category === Category.Company
    ? ["name", "features", "ideal_talent", "news"]
    : ["type", "features", "news"],
);
</script>
