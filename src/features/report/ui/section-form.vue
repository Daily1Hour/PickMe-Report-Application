<template>
  <div :id="id" class="q-pa-md">
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
  id: string;
  content: string;
}>();
const expanded = ref(true);
const local_content = ref(props.content);
const label = computed(() => sections_map[props.id as keyof typeof sections_map]);

watch(
  () => props.content,
  (edited_content) => {
    local_content.value = edited_content;
  },
);

const emit = defineEmits(["update:content"]);
const update_content = (edited_content: string) => {
  emit("update:content", edited_content);
};
</script>
