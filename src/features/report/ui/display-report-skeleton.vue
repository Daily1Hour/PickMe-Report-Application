<template>
  <q-list class="q-ma-md rounded-borders" bordered separator>
    <q-item v-for="(field, index) in fields" :key="index" v-ripple>
      <div class="q-mt-md fit">
        <field-title-skeleton v-if="field === 'title'" />

        <field-content-skeleton v-else />
      </div>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import FieldTitleSkeleton from "./field-title-skeleton.vue";
import FieldContentSkeleton from "./field-content-skeleton.vue";

const fields = ["title", null, null, null];
</script>
