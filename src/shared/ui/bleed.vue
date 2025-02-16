<template>
  <div class="bleed" :style="{ height }">
    <slot />
  </div>
</template>

<script setup lang="ts">
const { height } = defineProps<{ height: number }>();
</script>

<style scoped>
.bleed {
  background: #f0f0f0;
}
</style>
