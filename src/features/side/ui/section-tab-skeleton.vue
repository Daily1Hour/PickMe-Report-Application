<template>
  <q-item-section title="페이지 열기">
    <q-item-label caption>
      <q-skeleton :animation="animation" width="50px" height="20px" />
    </q-item-label>

    <q-item-label>
      <q-skeleton height="50px" :animation="animation" />
    </q-item-label>

    <q-item-label caption>
      <q-skeleton :animation="animation" height="20px" />
    </q-item-label>
  </q-item-section>
</template>

<script setup lang="ts">
import { QSkeletonAnimation } from "@/shared/type/QSkeletonAnimation";

const { animation } = defineProps<{ animation: QSkeletonAnimation }>();
</script>
