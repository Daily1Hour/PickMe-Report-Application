<template>
  <q-item-section>
    <router-link
      :to="{
        name: RouteName.Detail,
        params: { id },
      }"
    >
      <div class="text-grey">{{ category }}</div>
      <div>{{ name }}</div>
      <div class="text-caption text-grey">{{ caption }}</div>
    </router-link>
  </q-item-section>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

import { Summary } from "@/entities/summary/model";
import { RouteName } from "@/shared/model/RouteName";

const props = defineProps<{
  summary: Summary;
}>();
const { id, category, name, created_at } = props.summary;

const caption = computed(() => created_at.toLocaleString());
</script>
