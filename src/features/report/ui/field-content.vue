<template>
  <q-expansion-item
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
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import editorjs from "@/widgets/editorjs.vue"; // editorjs vue용 헬퍼 컴포넌트

const { label } = defineProps<{ label: string }>(); // 프로퍼티
const model_value = defineModel<any>({ required: true }); // 섹션 데이터
const key = computed(() => JSON.stringify(model_value.value)); // 렌더링 조건 키
const expanded = ref(true); // 확장 아이템 활성 여부

// v-model 업데이트
const update = (value: any) => {
  model_value.value = JSON.stringify(value);
};
</script>
