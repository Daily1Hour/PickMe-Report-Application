<template>
  <div class="row">
    <navigation />

    <report :key="$route.fullPath" />
  </div>
</template>

<script setup lang="ts">
import { Navigation, Report } from "./ui";
</script>
