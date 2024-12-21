<template>
  <q-btn label="저장" @click="() => mutation.mutate()" />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

import { setReport } from "../api";
import { useReportStore } from "../store/report";
import { RouteName } from "@/shared/model/RouteName";
import { QueryKey } from "@/shared/model/QueryKey";

const route = useRoute();

const queryClient = useQueryClient();

const store = useReportStore();

const mutation = useMutation({
  mutationFn: () =>
    setReport(store.category, store.created_at, store.report, route.name as RouteName),
  onSuccess: () => {
    queryClient.refetchQueries({ queryKey: [QueryKey.Summaries] });
  },
});
</script>
