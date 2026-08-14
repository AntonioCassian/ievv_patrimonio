import type { Request } from "express";
import type { AssetFiltersDTO } from "../schema/asset.schema.js";
import type { CreateAssetDTO, UpdateAssetDTO } from "../types/asset.types.js";
export declare class AssetService {
    private generateCode;
    create(data: CreateAssetDTO, createdById: string, file?: NonNullable<Request["file"]>): Promise<{
        id: string;
        code: string;
        name: string;
        description: string | null;
        category: string;
        type: string;
        value: import("@prisma/client-runtime-utils").Decimal | null;
        acquisitionDate: Date | null;
        imageUrl: string | null;
        status: import("../generated/prisma/enums.js").AssetStatus;
        quantity: number;
        quantityAvailable: number;
        departmentId: string;
        responsibleId: string | null;
        createdById: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(filters?: AssetFiltersDTO): Promise<({
        createdBy: {
            email: string;
            id: string;
            name: string;
        };
        department: {
            id: string;
            name: string;
        };
        responsible: {
            email: string;
            id: string;
            name: string;
        } | null;
    } & {
        id: string;
        code: string;
        name: string;
        description: string | null;
        category: string;
        type: string;
        value: import("@prisma/client-runtime-utils").Decimal | null;
        acquisitionDate: Date | null;
        imageUrl: string | null;
        status: import("../generated/prisma/enums.js").AssetStatus;
        quantity: number;
        quantityAvailable: number;
        departmentId: string;
        responsibleId: string | null;
        createdById: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findById(id: string): Promise<{
        createdBy: {
            email: string;
            id: string;
            name: string;
        };
        department: {
            id: string;
            name: string;
        };
        responsible: {
            email: string;
            id: string;
            name: string;
        } | null;
    } & {
        id: string;
        code: string;
        name: string;
        description: string | null;
        category: string;
        type: string;
        value: import("@prisma/client-runtime-utils").Decimal | null;
        acquisitionDate: Date | null;
        imageUrl: string | null;
        status: import("../generated/prisma/enums.js").AssetStatus;
        quantity: number;
        quantityAvailable: number;
        departmentId: string;
        responsibleId: string | null;
        createdById: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: UpdateAssetDTO): Promise<{
        id: string;
        code: string;
        name: string;
        description: string | null;
        category: string;
        type: string;
        value: import("@prisma/client-runtime-utils").Decimal | null;
        acquisitionDate: Date | null;
        imageUrl: string | null;
        status: import("../generated/prisma/enums.js").AssetStatus;
        quantity: number;
        quantityAvailable: number;
        departmentId: string;
        responsibleId: string | null;
        createdById: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: string): Promise<void>;
}
//# sourceMappingURL=AssetService.d.ts.map