<template :key="$route.fullPath">
  <div class="column fit">
    <load-report />

    <q-list class="q-ma-md rounded-borders" bordered separator style="order: 1">
      <q-item v-for="title in titles" :key="title" v-ripple>
        <section-form :id="title" />
      </q-item>
    </q-list>

    <div class="row justify-end" v-for="order in [0, 2]" :key="order" :style="{ order }">
      <save-report />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import LoadReport from "./load-report.vue";
import SectionForm from "./section-form.vue";
import SaveReport from "./save-report.vue";
import { useReportStore } from "../store/report";
import { company_report_keys, industry_report_keys } from "@/entities/report/model";
import { Category } from "@/shared/model/Category";

const store = useReportStore();

const titles = ref<string[]>(
  store.category === Category.Company ? company_report_keys : industry_report_keys,
);
</script>
