<template>
  <q-btn flat color="negative" icon="delete" size="xs" @click="remove" />
</template>

<script setup lang="ts">
import client from "@/shared/api/client";

const props = defineProps<{
  category: string;
  created_at: string;
}>();

const remove = async () => {
  const data = await client.delete("", {
    params: {
      category: props.category,
      createdAt: props.created_at,
    },
  });

  if (data.status === 200) {
    console.log("Deleted");
  }
};
</script>
