<template>
  <div class="fixed z-max q-px-md row justify-between items-center">
    <q-btn flat icon="menu" @click="is_show = !is_show" />

    <div class="text-h6 text-bold">목록</div>

    <q-btn flat disable icon="search" />
  </div>

  <q-drawer v-model="is_show" class="q-my-xl" :width="250" show-if-above side="left" bordered>
    <slot />
  </q-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const is_show = ref(true);
</script>

<style scoped>
.fixed {
  width: 250px;
}
</style>
