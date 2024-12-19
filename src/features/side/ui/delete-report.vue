<template>
  <q-btn flat color="negative" icon="delete" size="xs" @click="remove" />
</template>

<script setup lang="ts">
import { Category } from "@/shared/model/Category";
import client from "@/shared/api/client";

const props = defineProps<{
  category: Category;
  created_at: Date;
}>();

const remove = async () => {
  const data = await client.delete("", {
    params: {
      category: props.category,
      createdAt: props.created_at.toISOString(),
    },
  });

  if (data.status === 200) {
    console.log("Deleted");
  }
};
</script>
