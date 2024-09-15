import { LoginSchema } from '~/utils/schema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const validatedFields = await LoginSchema.parse(body)

  if (validatedFields.errors.length > 0) {
    return {
      error: 'Invalid email or password',
    }
  }

  return {
    success: 'Email sent',
  }
})
