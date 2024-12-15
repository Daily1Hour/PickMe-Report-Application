<template>
  <div class="q-pa-md" style="max-width: 350px; position: sticky; top: 0; height: 100%">
    <q-list bordered separator>
      <q-item v-for="item in items" clickable v-ripple>
        <q-item-section>
          <router-link :to="'/' + item.id">{{ item.label }}</router-link>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section style="align-content: center">
          <q-icon name="add" />
          <q-popup-edit v-model="label" auto-save v-slot="scope">
            <q-select
              v-model="category"
              :options="category_options"
              label="카테고리"
              style="width: 100px"
            />
          </q-popup-edit>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { ref } from "vue";

const category = ref("기업");
const category_options = ref(["기업", "산업"]);

const items = ref([
  { label: "리포트1", id: 1 },
  { label: "리포트2", id: 2 },
  { label: "리포트3", id: 3 },
]);
</script>
