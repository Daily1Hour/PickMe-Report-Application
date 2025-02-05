<template>
  <q-input
    v-model="model_value"
    class="q-px-xl text-h5"
    :label="label"
    :placeholder="label + '을 입력해주세요.'"
    :error-message="error_message"
    :error="!!error_message"
  />
</template>

<script setup lang="ts">
const { label, error_message } = defineProps<{ label: string; error_message: any }>(); // 프로퍼티
const model_value = defineModel<any>({ required: true }); // 섹션 데이터
</script>
