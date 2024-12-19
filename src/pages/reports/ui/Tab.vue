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

import { Category } from "@/entities/report/model/Category";

const props = defineProps<{
  item: {
    id: string;
    category: Category;
    name: string;
    created_at: Date;
  };
}>();
const { id, category, name, created_at } = props.item;

const title = computed(() => {
  return category + " / " + name + " /";
});
const caption = computed(() => {
  return created_at.toLocaleString();
});
</script>
