<template>
  <div :id="id" class="q-pa-md fit">
    <q-input
      v-if="just_text"
      v-model="model_value"
      :label="label"
      :placeholder="label + '을 입력해주세요.'"
    />

    <q-expansion-item
      v-else
      v-model="expanded"
      :label="label"
      :caption="label + '을 입력해주세요.'"
    >
      <q-card>
        <q-card-section>
          <editorjs placeholder="빈칸" :modelValue="model_value" @update="update" />
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import editorjs from "@/widgets/editorjs.vue";

import { CompanyReport, IndustryReport, ReportType } from "@/entities/report/model";
import { sections_map } from "@/shared/trans/ko";

const props = defineProps<{
  id: string;
}>();
const model_value = defineModel<any>({ required: true });

const expanded = ref(true);
const key = computed(() => props.id as keyof Omit<ReportType, "id">);
const label = computed(() => sections_map[key.value]);

const union_key = computed(() => props.id as keyof CompanyReport | keyof IndustryReport);
const just_text = computed(() => union_key.value === "name" || union_key.value === "type");

const update = (value: any) => {
  model_value.value = JSON.stringify(value);
};
</script>
