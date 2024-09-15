<script setup lang="ts">
import { CheckCircledIcon } from '@radix-icons/vue'

defineProps<{
  message?: string
}>()
</script>

<template>
  <div v-if="message" class="flex items-center gap-x-2 rounded-md bg-emerald-500/15 p-3 text-sm text-emerald-500">
    <CheckCircledIcon class="size-4" />
    <p>{{ message }}</p>
  </div>
</template>
