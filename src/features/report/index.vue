<template>
  <load-report :key="$route.fullPath" />

  <navigation />

  <display-report :key="$route.fullPath" />
</template>

<script setup lang="ts">
import { LoadReport, Navigation, DisplayReport } from "./ui";
</script>
