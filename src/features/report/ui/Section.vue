<template>
  <div :id="label" class="q-pa-md">
    <q-expansion-item v-model="expanded" :label="label" :caption="caption">
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

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  label: String,
  caption: String,
  content: String,
});
const expanded = ref(true);
const local_content = ref(props.content);

watch(
  () => props.content,
  (newVal) => {
    local_content.value = newVal;
  },
);

const emit = defineEmits(["update:content"]);
const update_content = (value) => {
  emit("update:content", value);
};
</script>
