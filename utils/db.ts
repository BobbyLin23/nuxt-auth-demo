import * as process from 'node:process'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL

const client = postgres(connectionString as string)

export const db = drizzle(client)
