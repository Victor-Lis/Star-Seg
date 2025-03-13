import { z } from 'zod'

export const updateUserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().optional(),
  phone: z.string().length(13).optional(),
  email: z.string().email().optional(),
  cep: z.string().length(8).optional(),
  state: z.string().length(2).optional(),
  city: z.string().optional(),
  neighborhood: z.string().optional(),
  street: z.string().optional(),
  number: z.number().optional(),
  complement: z.string().optional(),
})

export type UpdateUserInput = z.infer<typeof updateUserSchema>

export default updateUserSchema