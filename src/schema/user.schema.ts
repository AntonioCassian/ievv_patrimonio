import { z } from "zod";

export const createUserSchema = z
  .object({
    name: z
      .string()
      .min(3, "Nome completo é obrigatório"),

    email: z
      .string()
      .email("E-mail inválido"),

    phone: z
      .string()
      .optional(),

    role: z.enum([
      "ADMINISTRADOR",
      "PASTOR",
      "SUPERVISOR",
      "LIDER",
    ]),

    departmentId: z
      .string()
      .optional(),

    password: z
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .optional(),

    generateTemporaryPassword: z
      .boolean()
      .default(false),
  })
  .refine(
    (data) => data.password || data.generateTemporaryPassword,
    {
      message:
        "Informe uma senha ou solicite uma senha temporária",
      path: ["password"],
    }
  );

export const updateUserSchema = z.object({
  name: z
    .string()
    .min(3, "Nome completo deve ter pelo menos 3 caracteres")
    .optional(),

  email: z
    .string()
    .email("E-mail inválido")
    .optional(),

  phone: z
    .string()
    .optional(),

  role: z
    .enum([
      "ADMINISTRADOR",
      "PASTOR",
      "SUPERVISOR",
      "LIDER",
    ])
    .optional(),

  departmentId: z
    .string()
    .optional(),

  password: z
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .optional(),

  generateTemporaryPassword: z
    .boolean()
    .optional(),
});

export const userIdSchema = z.object({
  id: z
    .string()
    .min(1, "ID do usuário é obrigatório"),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export type UserIdInput = z.infer<typeof userIdSchema>;
