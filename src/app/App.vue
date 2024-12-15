<template>
  <div class="row">
    <div class="q-pa-md" style="max-width: 350px; position: sticky; top: 0; height: 100%">
      <q-list bordered separator>
        <q-item tag="a" :href="'#' + item.label" v-for="item in items" clickable v-ripple>
          <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
      </q-list>
    </div>

    <ul style="list-style-type: none; width: calc(100% - 350px)">
      <li v-for="item in items">
        <div :id="item.label" class="q-pa-md">
          <q-expansion-item v-model="item.expanded" :label="item.label" :caption="item.caption">
            <q-card>
              <q-card-section>
                <q-editor v-model="item.editor" :definitions="{ bold: { label: 'Bold' } }" />
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
