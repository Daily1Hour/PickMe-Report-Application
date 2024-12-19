<template>
  <q-btn label="저장" @click="save" />
</template>

<script setup lang="ts">
import { ReportType } from "@/entities/report/model";
import client from "@/shared/api/client";
import { map_to_reportDTO } from "../api/mapper";

const props = defineProps<{
  category: string;
  created_at: string;
  report: ReportType;
}>();

async function save() {
  const params = {
    category: props.category,
    createdAt: props.created_at,
  };

  const dto = map_to_reportDTO(props.report);
  if (params.createdAt) {
    const response = await client.put("", dto, { params });
    console.log("put", response);
  } else {
    const response = await client.post("", dto);
    console.log("post", response);
  }
}
</script>
