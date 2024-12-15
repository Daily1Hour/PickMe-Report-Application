<template>
  <div class="q-pa-md">
    <q-expansion-item v-model="expanded" :label="label" :caption="caption">
      <q-card>
        <q-card-section>
          <q-editor v-model="editor" :definitions="{ bold: { label: 'Bold' } }" />
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script setup>
import { ref } from "vue";

const expanded = ref(true);
const editor = ref("에디터");
const caption = ref("캡션");
const label = ref("타이틀");
</script>
