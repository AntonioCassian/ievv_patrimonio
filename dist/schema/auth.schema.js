import { z } from "zod";
export const loginSchema = z.object({
    email: z
        .string()
        .min(1, "E-mail é obrigatório.")
        .email("Informe um e-mail válido."),
    password: z
        .string()
        .min(1, "Senha é obrigatória."),
});
// Reset Password Schemas
export const forgotPasswordSchema = z.object({
    email: z
        .string()
        .min(1, "E-mail é obrigatório.")
        .email("Informe um e-mail válido."),
});
export const resetPasswordSchema = z.object({
    token: z
        .string()
        .length(6, "O código deve possuir 6 dígitos.")
        .regex(/^\d+$/, "Código inválido."),
    password: z
        .string()
        .min(8, "A senha deve possuir no mínimo 8 caracteres.")
        .regex(/[A-Z]/, "A senha deve possuir uma letra maiúscula.")
        .regex(/[a-z]/, "A senha deve possuir uma letra minúscula.")
        .regex(/[0-9]/, "A senha deve possuir um número."),
});
//# sourceMappingURL=auth.schema.js.map