<script setup lang="ts">
import { useForm } from 'vee-validate'
import type { IAuthResponse } from '~/types'

const success = ref<string>('')
const error = ref<string>('')

const pending = ref<boolean>(false)

const form = useForm({
  validationSchema: RegisterSchema,
})

const onSubmit = form.handleSubmit(async (values) => {
  pending.value = true
  const { data } = await useFetch<IAuthResponse>('/api/auth/login', {
    method: 'POST',
    body: values,
  })

  if (data.value?.success) {
    success.value = data.value.success
  }
  else if (data.value?.error) {
    error.value = data.value.error
  }

  pending.value = false
})
</script>

<template>
  <CardWrapper
    header-label="Create an account"
    back-button-href="/auth/login"
    back-button-label="Already have an account?"
    show-social
  >
    <form class="space-y-6" @submit="onSubmit">
      <FormField v-slot="{ componentField }" name="name">
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input placeholder="John Roe" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input type="email" placeholder="xxx@example.com" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input type="password" placeholder="xxxxxxxx" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit" class="w-full">
        Submit
      </Button>
    </form>
  </CardWrapper>
</template>
