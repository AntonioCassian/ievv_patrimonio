import { z } from "zod";
export declare const createLoanSchema: z.ZodObject<{
    assetId: z.ZodString;
    responsibleId: z.ZodString;
    purpose: z.ZodString;
    withdrawalDate: z.ZodCoercedDate<unknown>;
    expectedReturnDate: z.ZodCoercedDate<unknown>;
}, z.core.$strip>;
export declare const updateLoanSchema: z.ZodObject<{
    purpose: z.ZodOptional<z.ZodString>;
    responsibleId: z.ZodOptional<z.ZodString>;
    withdrawalDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    expectedReturnDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strip>;
export declare const loanIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type CreateLoanDTO = z.infer<typeof createLoanSchema>;
export type UpdateLoanDTO = z.infer<typeof updateLoanSchema>;
//# sourceMappingURL=loan.schema.d.ts.map