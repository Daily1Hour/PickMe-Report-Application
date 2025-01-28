<template>
  <div class="fixed z-max q-px-md row items-center">
    <q-btn class="z-max" flat icon="menu" @click="is_show = !is_show" />

    <div v-show="is_title_show" class="absolute-center text-h6 text-bold">목록</div>

    <search-summaries v-show="is_show" flat />
  </div>

  <q-drawer
    v-model="is_show"
    class="q-py-xl bg-grey-3"
    :width="250"
    show-if-above
    side="left"
    bordered
  >
    <slot />
  </q-drawer>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";

import { useSummaryStore } from "../store/summary";
import SearchSummaries from "./search-summaries.vue";

const { searching } = storeToRefs(useSummaryStore());
const is_show = ref(true);
const is_title_show = computed(() => is_show.value && !searching.value);
</script>

<style scoped>
.fixed {
  width: 250px;
}
</style>
