<template>
  <q-input v-model="store.search" class="absolute" input-class="text-right">
    <template v-slot:append>
      <q-icon v-if="store.search === ''" name="search" />
      <q-icon v-else name="clear" class="cursor-pointer" @click="store.search = ''" />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { useSummaryStore } from "../store/summary";

const store = useSummaryStore();
</script>

<style scoped>
::v-deep(.q-field__control::before) {
  border-bottom: none !important;
}
</style>
