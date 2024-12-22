<template>
  <q-btn flat color="negative" icon="delete" size="xs" @click="confirm = true" />

  <q-dialog v-model="confirm">
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="delete" color="primary" text-color="white" />
        <span class="q-ml-sm">정말로 삭제하시겠습니까?</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="취소" color="primary" v-close-popup />
        <q-btn flat label="삭제" color="primary" v-close-popup @click="() => mutation.mutate()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

import { deleteReport } from "../api";
import { Category } from "@/shared/model/Category";
import { QueryKey } from "@/shared/model/QueryKey";

const props = defineProps<{
  category: Category;
  created_at: Date;
}>();

const queryClient = useQueryClient();

const confirm = ref(false);

const mutation = useMutation({
  mutationFn: () => deleteReport(props.category, props.created_at),
  onSuccess: () => {
    queryClient.refetchQueries({ queryKey: [QueryKey.Summaries] });
  },
});
</script>
