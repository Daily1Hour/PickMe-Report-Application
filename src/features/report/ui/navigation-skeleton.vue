<template>
  <div class="q-ma-md q-mt-xl fixed-right q-gutter-sm top-margin-blank" title="네비게이션">
    <q-skeleton v-for="_ in sections" type="QBtn" animation="fade" width="60px" height="40px" />
  </div>
</template>

<script setup lang="ts">
const sections = [null, null, null, null];
</script>

<style scoped>
.top-margin-blank {
  margin-top: 100px;
}
</style>
