<template>
  <div class="q-pa-md" style="max-width: 350px; position: sticky; top: 0; height: 100%">
    <q-list bordered separator>
      <q-item v-for="item in items" clickable v-ripple>
        <q-item-section>
          <router-link :to="'/' + item.id">{{ item.label }}</router-link>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  { label: "리포트1", id: 1 },
  { label: "리포트2", id: 2 },
  { label: "리포트3", id: 3 },
]);
</script>
