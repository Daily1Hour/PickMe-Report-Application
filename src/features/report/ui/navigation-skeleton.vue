<template>
  <div class="q-ma-md q-mt-xl fixed-right q-gutter-sm top-margin-blank" title="네비게이션">
    <q-skeleton v-for="_ in 4" type="QBtn" :animation="animation" width="60px" height="40px" />
  </div>
</template>

<script setup lang="ts">
import { QSkeletonAnimation } from "@/shared/type/QSkeletonAnimation";

const { animation } = defineProps<{ animation: QSkeletonAnimation }>();
</script>

<style scoped>
.top-margin-blank {
  margin-top: 100px;
}
</style>
