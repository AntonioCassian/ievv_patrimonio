import { z } from "zod";

export const createChurchSettingsSchema = z.object({
  name: z
    .string()
    .min(1, "O nome da igreja é obrigatório.")
    .max(255, "O nome da igreja deve ter no máximo 255 caracteres."),

  address: z
    .string()
    .max(255, "O endereço deve ter no máximo 255 caracteres.")
    .optional()
    .or(z.literal("")),

  city: z
    .string()
    .max(100, "A cidade deve ter no máximo 100 caracteres.")
    .optional()
    .or(z.literal("")),

  state: z
    .string()
    .max(100, "O estado deve ter no máximo 100 caracteres.")
    .optional()
    .or(z.literal("")),

  phone: z
    .string()
    .max(30, "O telefone deve ter no máximo 30 caracteres.")
    .optional()
    .or(z.literal("")),
});

export const updateChurchSettingsSchema =
  createChurchSettingsSchema.partial();

export const churchSettingsIdSchema = z.object({
  id: z.string().min(1, "ID inválido."),
});
