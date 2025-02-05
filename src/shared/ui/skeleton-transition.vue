<template>
  <transition name="fade" mode="out-in">
    <div v-if="show_skeleton" key="skeleton">
      <slot name="skeleton" />
    </div>

    <div v-else key="content">
      <slot name="content" />
    </div>
  </transition>
</template>

<script setup lang="ts">
const show_skeleton = defineModel<boolean>({ required: true });
</script>

<style scoped>
/* 페이드 애니메이션 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
