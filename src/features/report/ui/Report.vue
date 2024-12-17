<template>
  <div class="column" style="width: calc(100% - 150px)">
    <ul style="list-style-type: none; order: 1">
      <li v-for="key in Object.keys(report)" :key="key">
        <Section
          :id="key"
          :sections_map="sections_map"
          :label="sections_map[key]"
          v-model:content="report[key as keyof ReportType]"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Section from "./Section.vue";

import { ReportType } from "@/entities/report/model";

defineProps<{
  report: ReportType;
  sections_map: Record<string, string>;
}>();
</script>
