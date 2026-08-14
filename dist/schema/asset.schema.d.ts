import { z } from "zod";
export declare const createAssetSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    category: z.ZodString;
    departmentId: z.ZodString;
    type: z.ZodString;
    responsibleId: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodNumber>;
    acquisitionDate: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateAssetSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    category: z.ZodOptional<z.ZodString>;
    departmentId: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    responsibleId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    value: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    acquisitionDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodEnum<{
        AVAILABLE: "AVAILABLE";
        DISPOSED: "DISPOSED";
        IN_USE: "IN_USE";
        MAINTENANCE: "MAINTENANCE";
    }>>;
}, z.core.$strip>;
export declare const assetIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export declare const assetFiltersSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodString>;
    department: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        AVAILABLE: "AVAILABLE";
        DISPOSED: "DISPOSED";
        IN_USE: "IN_USE";
        MAINTENANCE: "MAINTENANCE";
    }>>;
    type: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateAssetDTO = z.infer<typeof createAssetSchema>;
export type UpdateAssetDTO = z.infer<typeof updateAssetSchema>;
export type AssetFiltersDTO = z.infer<typeof assetFiltersSchema>;
//# sourceMappingURL=asset.schema.d.ts.map