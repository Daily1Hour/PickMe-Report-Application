<template>
  <div :id="item.label" class="q-pa-md">
    <q-expansion-item v-model="item.expanded" :label="item.label" :caption="item.caption">
      <q-card>
        <q-card-section>
          <q-editor v-model="item.editor" :definitions="{ bold: { label: 'Bold' } }" />
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
</script>
