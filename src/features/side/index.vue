<template>
  <load-summaries />

  <q-fab persistent color="secondary" icon="menu" direction="down">
    <q-fab-action class="cursor-inherit" color="white" anchor="end">
      <display-summaries />
    </q-fab-action>
  </q-fab>
</template>

<script setup lang="ts">
import { LoadSummaries, DisplaySummaries } from "./ui";
</script>
