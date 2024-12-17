<template>
  <div class="q-pa-md" style="max-width: 350px; position: sticky; top: 0; height: 100%">
    <q-list bordered separator>
      <q-item tag="a" :href="'#' + section" v-for="section in sections" clickable v-ripple>
        <q-item-section>{{ sections_map[section] }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  sections: string[];
  sections_map: Record<string, string>;
}>();
</script>
