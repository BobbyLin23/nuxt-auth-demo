<script setup lang="ts">
defineProps<{
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
  showSocial: boolean
}>()
</script>

<template>
  <Card class="w-[400px] shadow-md">
    <CardHeader>
      <Header :label="headerLabel" />
    </CardHeader>
    <CardContent>
      <slot />
    </CardContent>
    <CardFooter v-if="showSocial">
      <Social />
    </CardFooter>
    <CardFooter>
      <BackButton :href="backButtonHref" :label="backButtonLabel" />
    </CardFooter>
  </Card>
</template>
