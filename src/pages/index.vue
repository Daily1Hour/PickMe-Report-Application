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

<style scoped>
.q-layout-container {
  height: calc(100vh - 64px) !important; /* 프로젝트 네비게이션바 공간 예약 */
}
</style>
