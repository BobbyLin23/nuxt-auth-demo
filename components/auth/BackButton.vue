<script setup lang="ts">
defineProps<{
  href: string
  label: string
}>()
</script>

<template>
  <Button variant="link" class="w-full font-normal" size="sm" as-child>
    <NuxtLink :href="href">
      {{ label }}
    </NuxtLink>
  </Button>
</template>
