<template>
  <div :id="id" class="q-pa-md">
    <q-expansion-item v-model="expanded" :label="label" :caption="label + '을 입력해주세요.'">
      <q-card>
        <q-card-section>
          <q-editor
            v-if="just_text"
            v-model="store.report[key]"
            :definitions="{ bold: { label: 'Bold' } }"
          />
          <editorjs
            v-else
            placeholder="빈칸"
            :modelValue="store.report[key]"
            @update="update"
          />
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import editorjs from "@/widgets/editorjs.vue";

import { useReportStore } from "../store/report";
import { ReportType } from "@/entities/report/model";
import { sections_map } from "@/shared/trans/ko";

const props = defineProps<{
  id: string;
}>();
const store = useReportStore();

const expanded = ref(true);
const key = computed(() => props.id as keyof ReportType);
const label = computed(() => sections_map[key.value]);
const just_text = computed(() => key.value === "name" || key.value === "type");

const update = (value: any) => {
  store.report[key.value] = JSON.stringify(value);
};
</script>
