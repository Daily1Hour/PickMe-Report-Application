<template>
  <q-item-section class="row items-center">
    <q-icon name="add" color="secondary" />
    <q-popup-edit class="bg-grey-3" v-model="category" auto-save>
      <q-select v-model="category" :options="category_options" label="카테고리" />
    </q-popup-edit>
  </q-item-section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

import { Category, RouteName } from "@/shared/model";

const router = useRouter();
const category = ref<Category>();
const category_options = ref([Category.Company, Category.Industry]);

watch(
  () => category.value,
  (updated_category) => {
    // 새 리포트 추가 페이지로 이동
    router.push({ name: RouteName.New, query: { category: updated_category } });
  },
);
</script>
