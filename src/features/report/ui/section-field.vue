<template>
  <div :id="field" class="q-pa-md fit">
    <q-input
      v-if="field === 'name' || field === 'type'"
      v-model="model_value"
      class="q-px-xl text-h5"
      :label="label"
      :placeholder="label + '을 입력해주세요.'"
      :error-message="props.error"
      :error="!!props.error"
    />

    <q-expansion-item
      v-else
      v-model="expanded"
      class="text-h5"
      :label="label"
      :caption="label + '을 입력해주세요.'"
    >
      <q-card>
        <q-card-section>
          <editorjs
            :key="key"
            class="text-body2"
            placeholder="빈칸"
            :modelValue="model_value"
            @update="update"
          />
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { sections_map } from "@/shared/trans/ko";
import editorjs from "@/widgets/editorjs.vue"; // editorjs vue용 헬퍼 컴포넌트
import { ReportKeys } from "@/entities/report/model";

// 프로퍼티
const props = defineProps<{ field: ReportKeys; error: any }>();
const model_value = defineModel<any>({ required: true });
const key = computed(() => JSON.stringify(model_value.value));
// 지역 변수
const expanded = ref(true);
const label = computed(() => sections_map[props.field]);

// v-model 업데이트
const update = (value: any) => {
  model_value.value = JSON.stringify(value);
};
</script>
