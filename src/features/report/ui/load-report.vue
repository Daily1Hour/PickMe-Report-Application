<template></template>

<script setup lang="ts">
import { watch } from "vue";
import { useRoute } from "vue-router";
import { useQuery } from "@tanstack/vue-query";

import { getReport } from "../api";
import { useReportStore } from "../store/report";
import { ReportType } from "@/entities/report/model";
import { RouteName } from "@/shared/model/RouteName";
import { QueryKey } from "@/shared/model/QueryKey";

const route = useRoute();
const store = useReportStore();

const { data } = useQuery<ReportType>({
  queryKey: [QueryKey.Report, store.id],
  queryFn: () => getReport(store.id || "", store.category, route.name as RouteName),
  retry: false,
});

watch(data, (data) => {
  store.report = Object.assign(store.report, data);
});
</script>
