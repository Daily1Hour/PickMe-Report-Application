<template>
  <div class="row" style="height: 100%; width: calc(100% - 350px)">
    <navigation />

    <report :key="$route.fullPath" />
  </div>
</template>

<script setup lang="ts">
import { Navigation, Report } from "./ui";
</script>
