<template>
  <ul style="list-style-type: none; width: calc(100% - 350px)">
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
