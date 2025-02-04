<template>
  <q-item title="제목">
    <q-item-section>
      <q-item-label caption>
        <q-skeleton :animation="animation" width="50px" height="20px" />
      </q-item-label>

      <q-item-label>
        <q-skeleton type="QInput" height="50px" animation="fade" />
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { QSkeletonAnimation } from "@/shared/type/QSkeletonAnimation";

const { animation } = defineProps<{ animation: QSkeletonAnimation }>();
</script>
