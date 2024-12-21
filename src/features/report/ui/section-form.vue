<template>
  <div :id="id" class="q-pa-md">
    <q-expansion-item v-model="expanded" :label="label" :caption="label + '을 입력해주세요.'">
      <q-card>
        <q-card-section>
          <q-editor v-model="store.report[key]" :definitions="{ bold: { label: 'Bold' } }" />
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

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
</script>
