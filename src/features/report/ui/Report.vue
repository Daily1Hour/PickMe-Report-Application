<template>
  <ul style="list-style-type: none; width: calc(100% - 150px)">
    <li v-for="item in items">
      <Section :label="item.label" :caption="item.caption" :content="item.content" />
    </li>
  </ul>
</template>

<script setup>
import Section from "./Section.vue";

const props = defineProps({
  items: Array,
});
</script>
