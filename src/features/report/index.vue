<template>
  <div :key="$route.fullPath" class="column q-mx-auto" style="max-width: 1024px">
    <load-report />

    <navigation />

    <display-report />
  </div>
</template>

<script setup lang="ts">
import { LoadReport, Navigation, DisplayReport } from "./ui";
</script>
