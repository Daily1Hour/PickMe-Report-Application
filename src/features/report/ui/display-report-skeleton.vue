<template>
  <q-list class="q-ma-md rounded-borders" bordered separator>
    <q-item v-for="index in 4" :key="index" v-ripple>
      <div class="q-mt-md fit">
        <field-title-skeleton v-if="index === 1" :animation="animation" />

        <field-content-skeleton v-else :animation="animation" />
      </div>
    </q-item>
  </q-list>

  <actions-report-skeleton :animation="animation" />
</template>

<script setup lang="ts">
import { QSkeletonAnimation } from "@/shared/type/QSkeletonAnimation";
import FieldTitleSkeleton from "./field-title-skeleton.vue";
import FieldContentSkeleton from "./field-content-skeleton.vue";
import ActionsReportSkeleton from "./actions-report-skeleton.vue";

const { animation } = defineProps<{ animation: QSkeletonAnimation }>();
</script>
