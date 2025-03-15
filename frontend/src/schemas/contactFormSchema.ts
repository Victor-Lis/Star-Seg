import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  profilePicture: z.any().optional(),
  phone: z.string().regex(/^\d{2} \d{5}-\d{4}$/, "Telefone deve estar no formato XX XXXXX-XXXX"),
  email: z.string().email("E-mail inválido"),
  cep: z.string().length(8, "CEP deve ter 8 dígitos"),
  state: z.string().min(2, "Estado inválido"),
  city: z.string().min(2, "Cidade inválida"),
  neighborhood: z.string().min(2, "Bairro inválido"),
  street: z.string().min(2, "Rua inválida"),
  number: z.number().min(1, "Número é obrigatório"),
  complement: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
