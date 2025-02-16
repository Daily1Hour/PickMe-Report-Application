<template>
  <div class="window-height">
    <bleed :height="height">네비게이션 공간</bleed>

    <q-layout view="lhh LpR lff" container>
      <side />
      <report class="q-ma-md" />
    </q-layout>
  </div>
</template>

<script setup>
import { Bleed } from "@styleguide/vue";

import Side from "@/features/side";
import Report from "@/features/report";

const height = (document.querySelector("#pickme-nav")?.clientHeight || 0) + "px";
</script>
