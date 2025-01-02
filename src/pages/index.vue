<template>
  <q-layout view="lhh LpR lff">
    <q-page-container>
      <q-page padding>
        <q-page-sticky position="top-left" :offset="fabPos">
          <side />
        </q-page-sticky>

        <report />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import Side from "@/features/side";
import Report from "@/features/report";
</script>

<style scoped>
.q-page-sticky {
  top: unset !important;
  z-index: 10;
}
</style>
