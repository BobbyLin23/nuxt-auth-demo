<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <div class="flex w-full flex-col items-center justify-center gap-y-4">
    <h1 class="text-3xl font-semibold font-[Poppins]">
      🔐 Auth
    </h1>
    <p class="text-sm text-muted-foreground">
      {{ label }}
    </p>
  </div>
</template>
