<template>
  <q-btn flat color="negative" icon="delete" size="xs" @click="remove" />
</template>

<script setup lang="ts">
import { useMutation, useQueryClient } from "@tanstack/vue-query";

import { deleteReport } from "../api";
import { Category } from "@/shared/model/Category";
import { QueryKey } from "@/shared/model/QueryKey";

const props = defineProps<{
  category: Category;
  created_at: Date;
}>();

const queryClient = useQueryClient();

const mutation = useMutation({
  mutationFn: () => deleteReport(props.category, props.created_at),
  onSuccess: () => {
    queryClient.refetchQueries({ queryKey: [QueryKey.Summaries] });
  },
});

const remove = () => {
  mutation.mutate();
};
</script>
