<template>
  <div class="column" style="width: calc(100% - 150px)">
    <ul style="list-style-type: none; order: 1">
      <li v-for="key in Object.keys(report)" :key="key">
        <Section :key="key" v-model:content="report[key as keyof ReportType]" />
      </li>
    </ul>
    <div class="row justify-end" v-for="order in [0, 2]" :key="order" :style="{ order }">
      <q-btn label="저장" @click="save" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Section from "./Section.vue";

import { ReportType } from "@/entities/report/model";

const props = defineProps<{
  report: ReportType;
}>();

function save() {
  console.log("report", props.report);
}
</script>
