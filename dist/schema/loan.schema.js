import { z } from "zod";
export const createLoanSchema = z
    .object({
    assetId: z
        .string()
        .min(1, "O patrimônio é obrigatório"),
    responsibleId: z
        .string()
        .min(1, "O responsável é obrigatório"),
    purpose: z
        .string()
        .trim()
        .min(1, "A finalidade é obrigatória")
        .max(500, "A finalidade deve ter no máximo 500 caracteres"),
    withdrawalDate: z.coerce.date({
        message: "A data de retirada é obrigatória",
    }),
    expectedReturnDate: z.coerce.date({
        message: "A data prevista de devolução é obrigatória",
    }),
})
    .refine((data) => data.expectedReturnDate >=
    data.withdrawalDate, {
    message: "A data prevista de devolução não pode ser anterior à data de retirada",
    path: [
        "expectedReturnDate",
    ],
});
export const updateLoanSchema = z
    .object({
    purpose: z
        .string()
        .trim()
        .min(1, "A finalidade é obrigatória")
        .max(500)
        .optional(),
    responsibleId: z
        .string()
        .min(1, "O responsável é obrigatório")
        .optional(),
    withdrawalDate: z.coerce.date().optional(),
    expectedReturnDate: z.coerce.date().optional(),
})
    .refine((data) => {
    if (data.withdrawalDate &&
        data.expectedReturnDate) {
        return (data.expectedReturnDate >=
            data.withdrawalDate);
    }
    return true;
}, {
    message: "A data prevista de devolução não pode ser anterior à data de retirada",
    path: [
        "expectedReturnDate",
    ],
});
export const loanIdSchema = z.object({
    id: z
        .string()
        .min(1, "ID do empréstimo é obrigatório"),
});
//# sourceMappingURL=loan.schema.js.map