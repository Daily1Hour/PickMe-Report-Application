<template>
  <q-item-section>
    <router-link
      :to="{
        name: 'detail',
        params: { id },
        query: { category, createdAt: created_at.toISOString() },
      }"
      >{{ title }}</router-link
    >
  </q-item-section>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

const props = defineProps<{
  item: {
    id: string;
    category: string;
    name: string;
    created_at: Date;
  };
}>();
const { id, category, name, created_at } = props.item;

const title = computed(() => {
  return created_at.toLocaleDateString() + " / " + name;
});
</script>
