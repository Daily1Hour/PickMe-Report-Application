<template>
  <div :id="id" class="q-pa-md fit">
    <q-input
      v-if="id === 'name' || id === 'type'"
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

import { ReportKeys } from "@/entities/report/model";
import { sections_map } from "@/shared/trans/ko";

// 프로퍼티
const props = defineProps<{ id: ReportKeys }>();
const model_value = defineModel<any>({ required: true });
// 지역 변수
const expanded = ref(true);
const label = computed(() => sections_map[props.id]);

// v-model 업데이트
const update = (value: any) => {
  model_value.value = JSON.stringify(value);
};
</script>
