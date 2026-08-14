import { z } from "zod";
export const createAssetOperationSchema = z
    .object({
    tipoOperacao: z.enum([
        "USUFRUTO",
        "DOACAO",
    ]),
    patrimonioId: z
        .string()
        .min(1, "O patrimônio é obrigatório"),
    quantidade: z
        .number()
        .int("A quantidade deve ser um número inteiro")
        .positive("A quantidade deve ser maior que zero"),
    dataOperacao: z.coerce.date(),
    observacoes: z
        .string()
        .trim()
        .optional(),
    // USUFRUTO
    responsavelId: z
        .string()
        .optional(),
    dataInicio: z.coerce.date().optional(),
    dataFim: z.coerce.date().optional(),
    finalidade: z
        .string()
        .trim()
        .optional(),
    // DOAÇÃO
    doador: z
        .string()
        .trim()
        .optional(),
    dataDoacao: z.coerce.date().optional(),
    documento: z
        .string()
        .trim()
        .optional(),
})
    .superRefine((data, ctx) => {
    if (data.tipoOperacao ===
        "USUFRUTO") {
        if (!data.responsavelId) {
            ctx.addIssue({
                code: "custom",
                path: [
                    "responsavelId",
                ],
                message: "O responsável é obrigatório para usufruto",
            });
        }
        if (!data.dataInicio) {
            ctx.addIssue({
                code: "custom",
                path: [
                    "dataInicio",
                ],
                message: "A data de início é obrigatória para usufruto",
            });
        }
        if (!data.dataFim) {
            ctx.addIssue({
                code: "custom",
                path: ["dataFim"],
                message: "A data de término é obrigatória para usufruto",
            });
        }
        if (data.dataInicio &&
            data.dataFim &&
            data.dataFim <
                data.dataInicio) {
            ctx.addIssue({
                code: "custom",
                path: ["dataFim"],
                message: "A data de término não pode ser anterior à data de início",
            });
        }
        if (!data.finalidade) {
            ctx.addIssue({
                code: "custom",
                path: [
                    "finalidade",
                ],
                message: "A finalidade é obrigatória para usufruto",
            });
        }
    }
    if (data.tipoOperacao ===
        "DOACAO") {
        if (!data.doador) {
            ctx.addIssue({
                code: "custom",
                path: ["doador"],
                message: "O doador é obrigatório",
            });
        }
        if (!data.dataDoacao) {
            ctx.addIssue({
                code: "custom",
                path: [
                    "dataDoacao",
                ],
                message: "A data da doação é obrigatória",
            });
        }
    }
});
export const updateAssetOperationSchema = z.object({
    observacoes: z
        .string()
        .trim()
        .optional(),
    finalidade: z
        .string()
        .trim()
        .optional(),
    responsavelId: z
        .string()
        .optional(),
});
export const assetOperationIdSchema = z.object({
    id: z
        .string()
        .min(1, "ID da operação é obrigatório"),
});
export const renewUsufructSchema = z.object({
    novaDataTermino: z.coerce.date(),
    justificativa: z
        .string()
        .trim()
        .min(1, "A justificativa é obrigatória"),
    usuarioResponsavel: z
        .string()
        .min(1, "O usuário responsável é obrigatório"),
});
//# sourceMappingURL=asset-operation.schema.js.map