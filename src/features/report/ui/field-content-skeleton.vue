<template>
  <q-item title="필드">
    <q-item-section>
      <q-item-label>
        <q-skeleton :animation="animation" width="100px" height="30px" />
      </q-item-label>

      <q-item-label caption>
        <q-skeleton :animation="animation" width="150px" height="20px" />
      </q-item-label>
    </q-item-section>

    <div class="row items-center">
      <q-icon name="keyboard_arrow_up" color="grey-4" size="28px" />
    </div>
  </q-item>

  <q-item title="내용">
    <q-card-section class="full-width">
      <q-skeleton type="QInput" height="200px" :animation="animation" />
    </q-card-section>
  </q-item>
</template>

<script setup lang="ts">
import { QSkeletonAnimation } from "@/shared/type/QSkeletonAnimation";

const { animation } = defineProps<{ animation: QSkeletonAnimation }>();
</script>
