<template>
  <div :id="key" class="q-pa-md">
    <q-expansion-item v-model="expanded" :label="label" :caption="label + '을 입력해주세요.'">
      <q-card>
        <q-card-section>
          <q-editor
            v-model="local_content"
            @update:model-value="update_content"
            :definitions="{ bold: { label: 'Bold' } }"
          />
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

import { sections_map } from "@/shared/trans/ko";

const props = defineProps<{
  key: string;
  content: string;
}>();
const expanded = ref(true);
const local_content = ref(props.content);
const label = computed(() => sections_map[props.key as keyof typeof sections_map]);

watch(
  () => props.content,
  (newVal) => {
    local_content.value = newVal;
  },
);

const emit = defineEmits(["update:content"]);
const update_content = (value: string) => {
  emit("update:content", value);
};
</script>
