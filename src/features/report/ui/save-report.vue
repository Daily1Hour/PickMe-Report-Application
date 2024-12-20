<template>
  <q-btn label="저장" @click="save" />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

import { map_to_reportDTO } from "../api/mapper";
import { ReportType } from "@/entities/report/model";
import { Category } from "@/shared/model/Category";
import client from "@/shared/api/client";

const props = defineProps<{
  category: Category;
  created_at: Date;
  report: ReportType;
}>();

const route = useRoute();

const queryClient = useQueryClient();

const mutation = useMutation({
  mutationFn: ({
    dto,
    params,
  }: {
    dto: any;
    params: { category: Category; createdAt: string | null };
  }) => {
    if (route.name === "new") {
      return client.post("", dto);
    } else {
      return client.put("", dto, { params });
    }
  },
  onSuccess: () => {
    queryClient.refetchQueries({ queryKey: ["summaries"] });
  },
});

async function save() {
  const params = {
    category: props.category,
    createdAt: route.name === "new" ? null : props.created_at.toISOString(),
  };

  const dto = map_to_reportDTO(props.report);
  mutation.mutate({ dto, params });
}
</script>
