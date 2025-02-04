<template>
  <div class="flex flex-center" title="페이지 이동">
    <q-icon name="first_page" class="q-mx-xs" color="grey-4" size="1.715em" />
    <q-icon name="keyboard_arrow_left" class="q-mx-xs" color="grey-4" size="1.715em" />
    <q-skeleton color="grey-4" width="30%" :animation="animation" />
    <q-icon name="keyboard_arrow_right" class="q-mx-xs" color="grey-4" size="1.715em" />
    <q-icon name="last_page" class="q-mx-xs" color="grey-4" size="1.715em" />
  </div>
</template>

<script setup lang="ts">
import { QSkeletonAnimation } from "@/shared/type/QSkeletonAnimation";

const { animation } = defineProps<{ animation: QSkeletonAnimation }>();
</script>
