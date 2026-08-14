export interface CreateAssetDTO {
    name: string;
    description?: string;
    category: string;
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
    category?: string;
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
    category?: string;
    department?: string;
    status?:
        | "AVAILABLE"
        | "IN_USE"
        | "MAINTENANCE"
        | "DISPOSED";
    type?: string;
}