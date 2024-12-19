<template>
  <q-item-section>
    <router-link
      :to="{
        name: 'detail',
        params: { id },
        query: { category, createdAt: created_at.toISOString() },
      }"
    >
      <div>{{ title }}</div>
      <div class="text-caption text-grey">{{ caption }}</div>
    </router-link>
  </q-item-section>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

import { Summary } from "@/entities/report/model";

const props = defineProps<{
  summary: Summary;
}>();
const { id, category, name, created_at } = props.summary;

const title = computed(() => {
  return category + " / " + name + " /";
});
const caption = computed(() => {
  return created_at.toLocaleString();
});
</script>
