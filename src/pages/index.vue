<template>
  <q-layout view="lhh LpR lff" container>
    <side />
    <report class="q-ma-md" />
  </q-layout>
</template>

<script setup>
import Side from "@/features/side";
import Report from "@/features/report";
</script>

<style>
.q-layout-container {
  height: calc(100vh - 64px) !important;
}
</style>
