<template>
  <q-input v-model="search" class="absolute" input-class="text-right">
    <template v-slot:append>
      <q-icon v-if="search === ''" name="search" />
      <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useSummaryStore } from "../store/summary";

const { search } = storeToRefs(useSummaryStore());
</script>

<style scoped>
::v-deep(.q-field__control::before) {
  border-bottom: none !important;
}
</style>
