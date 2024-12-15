<template>
  <div class="row">
    <Navigation :items="items" />

    <Report :items="items" />
  </div>
</template>

<script setup>
import { ref } from "vue";

import { Navigation, Report } from "./ui";

const items = ref([
  {
    label: "타이틀1",
    caption: "캡션1",
    editor: "",
    expanded: true,
  },
  {
    label: "타이틀2",
    caption: "캡션2",
    editor: "",
    expanded: true,
  },
  {
    label: "타이틀3",
    caption: "캡션3",
    editor: "",
    expanded: true,
  },
]);
</script>
