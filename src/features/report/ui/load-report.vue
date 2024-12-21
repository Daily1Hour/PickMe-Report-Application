<template></template>

<script setup lang="ts">
import { watch } from "vue";
import { useRoute } from "vue-router";
import { useQuery } from "@tanstack/vue-query";

import { getReport } from "../api";
import { Category } from "@/shared/model/Category";
import { RouteName } from "@/shared/model/RouteName";
import { QueryKey } from "@/shared/model/QueryKey";

const props = defineProps<{
  category: Category;
  created_at: Date;
}>();

const emit = defineEmits(["fetched"]);

const route = useRoute();

const { data } = useQuery({
  queryKey: [QueryKey.Report, props.category, props.created_at],
  queryFn: () => getReport(props.category, props.created_at, route.name as RouteName),
  retry: false,
});

watch(data, (data) => {
  emit("fetched", data);
});
</script>
