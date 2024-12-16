<template>
  <q-item-section>
    <router-link
      :to="{
        name: 'detail',
        params: { id },
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
    name: string;
    created_at: Date;
  };
}>();
const { id, name, created_at } = props.item;

const title = computed(() => {
  return created_at.toLocaleDateString() + " / " + name;
});
</script>
