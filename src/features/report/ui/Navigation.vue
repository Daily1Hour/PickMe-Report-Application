<template>
  <div class="q-pa-md" style="max-width: 350px; position: sticky; top: 0; height: 100%">
    <q-list bordered separator>
      <q-item tag="a" :href="'#' + section" v-for="section in sections" clickable v-ripple>
        <q-item-section>{{ sections_map[section as keyof typeof sections_map] }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

import { Category } from "@/entities/report/model/Category";
import { sections_map } from "@/shared/trans/ko";

const props = defineProps<{
  category: Category;
}>();
const sections = ref<string[]>([]);

watch(
  () => props.category,
  (updated_category) => {
    if (updated_category === Category.Company) {
      sections.value = ["name", "features", "ideal_talent", "news"];
    }
    if (updated_category === Category.Industry) {
      sections.value = ["type", "features", "news"];
    }
  },
);
</script>
