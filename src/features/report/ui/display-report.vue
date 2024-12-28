<template>
  <div class="column fit">
    <q-list class="q-ma-md rounded-borders" bordered separator style="order: 1">
      <q-item v-for="field in fields" :key="field" v-ripple>
        <section-form :id="field" v-model="(store.report as Record<string, string>)[field]" />
      </q-item>
    </q-list>

    <div class="row justify-end" v-for="order in [0, 2]" :key="order" :style="{ order }">
      <save-report />
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionForm from "./section-form.vue";
import SaveReport from "./save-report.vue";
import { useReportStore } from "../store/report";
import { ReportKeys } from "@/entities/report/model";
import { computed } from "vue";

const store = useReportStore();
const fields = computed(() => Object.keys(store.report) as ReportKeys[]);
</script>
