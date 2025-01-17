<template>
  <q-btn class="fixed" flat icon="menu" @click="is_show = !is_show" />

  <q-drawer v-model="is_show" class="q-my-xl" show-if-above side="left" bordered>
    <slot />
  </q-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const is_show = ref(true);
</script>

<style scoped>
.q-btn {
  z-index: 1001;
}
</style>
