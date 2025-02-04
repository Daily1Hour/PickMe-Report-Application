<template>
  <div :id="field" class="q-pa-md fit">
    <section-title-field
      v-if="field === 'name' || field === 'type'"
      v-model="model_value"
      :label="label"
      :error_message="props.error"
    />

    <section-content-field v-else v-model="model_value" :label="label" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ReportKeys } from "@/entities/report/model";

import { sections_map } from "@/shared/trans/ko";
import SectionTitleField from "./section-title-field.vue";
import SectionContentField from "./section-content-field.vue";

const props = defineProps<{ field: ReportKeys; error: any }>(); // 프로퍼티
const label = computed(() => sections_map[props.field]); // 섹션 레이블
const model_value = defineModel<any>({ required: true }); // 섹션 데이터
</script>
