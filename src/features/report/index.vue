<template>
  <div class="row">
    <navigation />

    <display-report :key="$route.fullPath" />
  </div>
</template>

<script setup lang="ts">
import { Navigation, DisplayReport } from "./ui";
</script>
