import { z } from "zod";

export const updateNotificationSettingsSchema =
    z
        .object({
            notificacaoEmprestimo:
                z.boolean().optional(),

            notificacaoDevolucao:
                z.boolean().optional(),

            notificacaoUsufruto:
                z.boolean().optional(),

            notificacaoDoacao:
                z.boolean().optional(),

            notificacaoPatrimonio:
                z.boolean().optional(),
        })
        .refine(
            (data) =>
                Object.keys(data).length > 0,
            {
                message:
                    "Informe ao menos uma configuração para atualizar.",
            }
        );

export type UpdateNotificationSettingsDTO =
    z.infer<
        typeof updateNotificationSettingsSchema
    >;
