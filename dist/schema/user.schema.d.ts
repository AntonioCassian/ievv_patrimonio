import { z } from "zod";
export declare const createUserSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    role: z.ZodEnum<{
        ADMINISTRADOR: "ADMINISTRADOR";
        LIDER: "LIDER";
        PASTOR: "PASTOR";
        SUPERVISOR: "SUPERVISOR";
    }>;
    departmentId: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    generateTemporaryPassword: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export declare const updateUserSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodEnum<{
        ADMINISTRADOR: "ADMINISTRADOR";
        LIDER: "LIDER";
        PASTOR: "PASTOR";
        SUPERVISOR: "SUPERVISOR";
    }>>;
    departmentId: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    generateTemporaryPassword: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const userIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export type UserIdInput = z.infer<typeof userIdSchema>;
//# sourceMappingURL=user.schema.d.ts.map