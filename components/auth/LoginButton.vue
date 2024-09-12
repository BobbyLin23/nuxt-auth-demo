<script setup lang="ts">
const router = useRouter()

function onClick() {
  router.push('/auth/login')
}
</script>

<template>
  <span class="cursor-pointer" @click="onClick">
    <slot />
  </span>
</template>
