<template>
  <q-btn label="저장" @click="() => mutation.mutate()" />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

import { setReport } from "../api";
import { ReportType } from "@/entities/report/model";
import { Category } from "@/shared/model/Category";
import { RouteName } from "@/shared/model/RouteName";

const props = defineProps<{
  category: Category;
  created_at: Date;
  report: ReportType;
}>();

const route = useRoute();

const queryClient = useQueryClient();

const mutation = useMutation({
  mutationFn: () => setReport(props.category, props.created_at, props.report, route.name as RouteName),
  onSuccess: () => {
    queryClient.refetchQueries({ queryKey: ["summaries"] });
  },
});
</script>
