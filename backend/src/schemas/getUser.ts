import { z } from 'zod'

export const getUserSchema = z.object({
  id: z.string().uuid()
})

export type GetUserInput = z.infer<typeof getUserSchema>

export default getUserSchema