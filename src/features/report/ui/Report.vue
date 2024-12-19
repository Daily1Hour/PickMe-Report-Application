<template :key="$route.fullPath">
  <read-report
    :category="props.category"
    :created_at="props.created_at"
    @fetched="report = $event"
  />

  <div class="column" style="width: calc(100% - 150px)">
    <ul style="list-style-type: none; order: 1">
      <li v-for="key in titles" :key="key">
        <section-tab :id="key" v-model:content="report[key as keyof ReportType]" />
      </li>
    </ul>
    <div class="row justify-end" v-for="order in [0, 2]" :key="order" :style="{ order }">
      <save-report :category="props.category" :created_at="props.created_at" :report="report" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import ReadReport from "./read-report.vue";
import SectionTab from "./section-tab.vue";
import SaveReport from "./save-report.vue";
import { map_to_companyReport, map_to_industryReport } from "../api/mapper";
import { ReportType } from "@/entities/report/model";
import { Category } from "@/shared/model/Category";

const props = defineProps<{
  category: Category;
  created_at: Date;
}>();

const titles = ref<string[]>(
  props.category === Category.Company
    ? ["name", "features", "ideal_talent", "news"]
    : ["type", "features", "news"],
);
const report = ref<ReportType>(
  props.category === Category.Company ? map_to_companyReport() : map_to_industryReport(),
);
</script>
