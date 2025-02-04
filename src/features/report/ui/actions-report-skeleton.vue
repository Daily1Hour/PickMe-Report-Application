<template>
  <div class="fixed-top-right q-ma-md row justify-end q-gutter-sm">
    <q-skeleton type="QBtn" :animation="animation" title="삭제" width="60px" />
    <q-skeleton type="QBtn" :animation="animation" title="저장" width="60px" />
  </div>
</template>

<script setup lang="ts">
import { QSkeletonAnimation } from "@/shared/type/QSkeletonAnimation";

const { animation } = defineProps<{ animation: QSkeletonAnimation }>();
</script>
