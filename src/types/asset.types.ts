import type { AssetCategory } from "../generated/prisma/enums.js";

export interface CreateAssetDTO {
    name: string;
    description?: string;
    category: AssetCategory;
    departmentId: string;
    type: string;
    responsibleId?: string;
    value?: number;
    acquisitionDate?: string;
    imageUrl?: string;
}

export interface UpdateAssetDTO {
    name?: string;
    description?: string | null;
    category?: AssetCategory;
    departmentId?: string;
    type?: string;
    responsibleId?: string | null;
    value?: number | null;
    acquisitionDate?: string | null;
    imageUrl?: string | null;
    status?:
        | "AVAILABLE"
        | "IN_USE"
        | "MAINTENANCE"
        | "DISPOSED";
}

export interface AssetFiltersDTO {
    name?: string;
    category?: AssetCategory;
    department?: string;
    status?:
        | "AVAILABLE"
        | "IN_USE"
        | "MAINTENANCE"
        | "DISPOSED";
    type?: string;
}