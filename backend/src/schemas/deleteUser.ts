import { z } from 'zod'

export const deleteUserSchema = z.object({
  id: z.string().uuid()
})

export type DeleteUserInput = z.infer<typeof deleteUserSchema>

export default deleteUserSchema