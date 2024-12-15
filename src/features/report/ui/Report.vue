<template>
  <ul style="list-style-type: none;">
    <li v-for="item in items">
      <Section :item="item" />
    </li>
  </ul>
</template>

<script setup>
import Section from "./Section.vue";

const props = defineProps({
  items: Array,
});
</script>
