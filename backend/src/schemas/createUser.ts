import { z } from 'zod'

export const createUserSchema = z.object({
  name: z.string(),
  phone: z.string().length(13),
  email: z.string().email(),
  cep: z.string().length(8),
  state: z.string().length(2),
  city: z.string(),
  neighborhood: z.string(),
  street: z.string(),
  number: z.number(),
  complement: z.string().optional(),
})

export type CreateUserInput = z.infer<typeof createUserSchema>

export default createUserSchema