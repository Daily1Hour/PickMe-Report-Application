<template>
  <q-layout view="lhh LpR lff">
    <q-page-container>
      <q-page padding>
        <report />

        <q-page-sticky position="top-left" :offset="fabPos" style="z-index: 10">
          <side />
        </q-page-sticky>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import Side from "@/features/side";
import Report from "@/features/report";
</script>
