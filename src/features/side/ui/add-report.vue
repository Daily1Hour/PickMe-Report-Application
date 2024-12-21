<template>
  <q-item-section style="align-content: center">
    <q-icon name="add" />
    <q-popup-edit v-model="category" auto-save>
      <q-select
        v-model="category"
        :options="category_options"
        label="카테고리"
        style="width: 100px"
      />
    </q-popup-edit>
  </q-item-section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

import { Category } from "@/shared/model/Category";
import { RouteName } from "@/shared/model/RouteName";

const router = useRouter();
const category = ref<Category>();
const category_options = ref([Category.Company, Category.Industry]);

watch(
  () => category.value,
  (updated_category) => {
    router.push({ name: RouteName.New, query: { category: updated_category } });
  },
);
</script>
