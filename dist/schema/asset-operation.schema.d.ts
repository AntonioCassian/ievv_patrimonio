import { z } from "zod";
export declare const createAssetOperationSchema: z.ZodObject<{
    tipoOperacao: z.ZodEnum<{
        DOACAO: "DOACAO";
        USUFRUTO: "USUFRUTO";
    }>;
    patrimonioId: z.ZodString;
    quantidade: z.ZodNumber;
    dataOperacao: z.ZodCoercedDate<unknown>;
    observacoes: z.ZodOptional<z.ZodString>;
    responsavelId: z.ZodOptional<z.ZodString>;
    dataInicio: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    dataFim: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    finalidade: z.ZodOptional<z.ZodString>;
    doador: z.ZodOptional<z.ZodString>;
    dataDoacao: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    documento: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateAssetOperationSchema: z.ZodObject<{
    observacoes: z.ZodOptional<z.ZodString>;
    finalidade: z.ZodOptional<z.ZodString>;
    responsavelId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const assetOperationIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export declare const renewUsufructSchema: z.ZodObject<{
    novaDataTermino: z.ZodCoercedDate<unknown>;
    justificativa: z.ZodString;
    usuarioResponsavel: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=asset-operation.schema.d.ts.map