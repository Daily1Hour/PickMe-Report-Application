<template>
  <q-item-section>
    <router-link :to="'/' + created_at">{{ title }}</router-link>
  </q-item-section>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

const props = defineProps<{
  item: {
    name: string;
    created_at: Date;
  };
}>();
const { name, created_at } = props.item;

const title = computed(() => {
  return created_at.toLocaleDateString() + " / " + name;
});
</script>
