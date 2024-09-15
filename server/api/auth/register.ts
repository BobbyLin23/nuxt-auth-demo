import { RegisterSchema } from '~/utils/schema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const validatedFields = await RegisterSchema.parse(body)

  if (validatedFields.errors.length > 0) {
    return {
      error: 'Invalid credentials',
    }
  }

  return {
    success: 'Email sent',
  }
})
