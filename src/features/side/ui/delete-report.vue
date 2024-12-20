<template>
  <q-btn flat color="negative" icon="delete" size="xs" @click="remove" />
</template>

<script setup lang="ts">
import { useMutation, useQueryClient } from "@tanstack/vue-query";

import { Category } from "@/shared/model/Category";
import client from "@/shared/api/client";

const props = defineProps<{
  category: Category;
  created_at: Date;
}>();

const queryClient = useQueryClient();

const mutation = useMutation({
  mutationFn: async () => {
    const data = await client.delete("", {
      params: {
        category: props.category,
        createdAt: props.created_at.toISOString(),
      },
    });

    if (data.status === 200) {
      console.log("Deleted");
    }
  },
  onSuccess: () => {
    queryClient.refetchQueries({ queryKey: ["summaries"] });
  },
});

const remove = () => {
  mutation.mutate();
};
</script>
