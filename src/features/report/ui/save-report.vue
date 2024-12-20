<template>
  <q-btn label="저장" @click="() => mutation.mutate()" />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

import { setReport } from "../api";
import { ReportType } from "@/entities/report/model";
import { Category } from "@/shared/model/Category";

const props = defineProps<{
  category: Category;
  created_at: Date;
  report: ReportType;
}>();

const route = useRoute();

const queryClient = useQueryClient();

const mutation = useMutation({
  mutationFn: () => setReport(props.category, props.created_at, route.name as string, props.report),
  onSuccess: () => {
    queryClient.refetchQueries({ queryKey: ["summaries"] });
  },
});
</script>
