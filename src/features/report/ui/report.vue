<template :key="$route.fullPath">
  <load-report :category="props.category" :created_at="props.created_at" @fetched="fetched" />

  <div class="column" style="width: calc(100% - 150px)">
    <ul style="list-style-type: none; order: 1">
      <li v-for="key in titles" :key="key">
        <section-form
          :id="key"
          v-model:content="report[key as keyof ReportType]"
          @update="update(key, $event)"
        />
      </li>
    </ul>
    <div class="row justify-end" v-for="order in [0, 2]" :key="order" :style="{ order }">
      <save-report :category="props.category" :created_at="props.created_at" :report="report" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

import LoadReport from "./load-report.vue";
import SectionForm from "./section-form.vue";
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
const report = reactive<ReportType>(
  props.category === Category.Company ? map_to_companyReport() : map_to_industryReport(),
);

const fetched = (data: ReportType) => Object.assign(report, data);

const update = (key: string, value: string) => {
  report[key as keyof ReportType] = value;
};
</script>
