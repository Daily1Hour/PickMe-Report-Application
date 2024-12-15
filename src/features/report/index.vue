<template>
  <div class="row" style="width: calc(100% - 350px)">
    <Navigation :items="items" />

    <Report :items="items" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

import { Navigation, Report } from "./ui";

const route = useRoute();
const id = route.params.id;
console.log(id);

const items = ref([
  {
    label: id + " 타이틀1",
    caption: "캡션1",
    editor: "",
    expanded: true,
  },
  {
    label: id + " 타이틀2",
    caption: "캡션2",
    editor: "",
    expanded: true,
  },
  {
    label: id + " 타이틀3",
    caption: "캡션3",
    editor: "",
    expanded: true,
  },
]);
</script>
