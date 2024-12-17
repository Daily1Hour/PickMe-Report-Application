<template>
  <div class="column" style="width: calc(100% - 150px)">
    <ul style="list-style-type: none; order: 1">
      <li v-for="key in Object.keys(report)" :key="key">
        <Section
          :label="key"
          :caption="key + '을 입력해주세요.'"
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
  sections: [string, string, string, string];
  report: ReportType;
}>();
</script>
