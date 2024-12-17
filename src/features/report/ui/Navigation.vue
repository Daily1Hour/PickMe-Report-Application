<template>
  <div class="q-pa-md" style="max-width: 350px; position: sticky; top: 0; height: 100%">
    <q-list bordered separator>
      <q-item tag="a" :href="'#' + key" v-for="key in report_keys" clickable v-ripple>
        <q-item-section>{{ sections_map[key as keyof typeof sections_map] }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { sections_map } from "@/shared/trans/ko";

defineProps<{
  report_keys: string[];
}>();
</script>
