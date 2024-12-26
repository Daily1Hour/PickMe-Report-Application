<template>
  <load-summaries />

  <q-fab persistent color="secondary" icon="menu" direction="down" style="height: 50px">
    <q-fab-action style="transform: translateX(50%); background: white">
      <display-summaries />
    </q-fab-action>
  </q-fab>
</template>

<script setup lang="ts">
import { LoadSummaries, DisplaySummaries } from "./ui";
</script>
