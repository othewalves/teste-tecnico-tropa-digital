import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email('E-mail inválido').min(1, 'Campo é obrigatório'),
    password: z.string().min(6, 'A senha precisa ter no mínimo 6 caracteres')
})

export type loginForm = z.infer<typeof loginSchema>