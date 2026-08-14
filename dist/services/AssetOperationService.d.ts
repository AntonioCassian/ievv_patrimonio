import type { CreateAssetOperationDTO, UpdateAssetOperationDTO, RenewUsufructDTO } from "../types/asset-operation.types.js";
export declare class AssetOperationService {
    create(data: CreateAssetOperationDTO, createdById: string): Promise<{
        id: string;
        type: import("../generated/prisma/enums.js").OperationType;
        status: import("../generated/prisma/enums.js").OperationStatus;
        assetId: string;
        quantity: number;
        operationDate: Date;
        observations: string | null;
        responsibleId: string | null;
        startDate: Date | null;
        endDate: Date | null;
        purpose: string | null;
        donor: string | null;
        donationDate: Date | null;
        document: string | null;
        createdById: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        asset: {
            code: string;
            id: string;
            name: string;
        };
        createdBy: {
            email: string;
            id: string;
            name: string;
        };
        histories: {
            id: string;
            operationId: string;
            type: import("../generated/prisma/enums.js").UsufructHistoryType;
            previousEndDate: Date | null;
            newEndDate: Date | null;
            justification: string | null;
            createdById: string;
            createdAt: Date;
        }[];
        responsible: {
            email: string;
            id: string;
            name: string;
            status: import("../generated/prisma/enums.js").UserStatus;
        } | null;
    } & {
        id: string;
        type: import("../generated/prisma/enums.js").OperationType;
        status: import("../generated/prisma/enums.js").OperationStatus;
        assetId: string;
        quantity: number;
        operationDate: Date;
        observations: string | null;
        responsibleId: string | null;
        startDate: Date | null;
        endDate: Date | null;
        purpose: string | null;
        donor: string | null;
        donationDate: Date | null;
        document: string | null;
        createdById: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findById(id: string): Promise<{
        asset: {
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
        };
        createdBy: {
            email: string;
            id: string;
            name: string;
        };
        histories: ({
            createdBy: {
                email: string;
                id: string;
                name: string;
            };
        } & {
            id: string;
            operationId: string;
            type: import("../generated/prisma/enums.js").UsufructHistoryType;
            previousEndDate: Date | null;
            newEndDate: Date | null;
            justification: string | null;
            createdById: string;
            createdAt: Date;
        })[];
        responsible: {
            email: string;
            id: string;
            name: string;
            status: import("../generated/prisma/enums.js").UserStatus;
        } | null;
    } & {
        id: string;
        type: import("../generated/prisma/enums.js").OperationType;
        status: import("../generated/prisma/enums.js").OperationStatus;
        assetId: string;
        quantity: number;
        operationDate: Date;
        observations: string | null;
        responsibleId: string | null;
        startDate: Date | null;
        endDate: Date | null;
        purpose: string | null;
        donor: string | null;
        donationDate: Date | null;
        document: string | null;
        createdById: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: UpdateAssetOperationDTO): Promise<{
        id: string;
        type: import("../generated/prisma/enums.js").OperationType;
        status: import("../generated/prisma/enums.js").OperationStatus;
        assetId: string;
        quantity: number;
        operationDate: Date;
        observations: string | null;
        responsibleId: string | null;
        startDate: Date | null;
        endDate: Date | null;
        purpose: string | null;
        donor: string | null;
        donationDate: Date | null;
        document: string | null;
        createdById: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: string): Promise<void>;
    renewUsufruct(id: string, data: RenewUsufructDTO, createdById: string): Promise<({
        asset: {
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
        };
        createdBy: {
            email: string;
            id: string;
            name: string;
        };
        histories: ({
            createdBy: {
                email: string;
                id: string;
                name: string;
            };
        } & {
            id: string;
            operationId: string;
            type: import("../generated/prisma/enums.js").UsufructHistoryType;
            previousEndDate: Date | null;
            newEndDate: Date | null;
            justification: string | null;
            createdById: string;
            createdAt: Date;
        })[];
        responsible: {
            email: string;
            id: string;
            name: string;
        } | null;
    } & {
        id: string;
        type: import("../generated/prisma/enums.js").OperationType;
        status: import("../generated/prisma/enums.js").OperationStatus;
        assetId: string;
        quantity: number;
        operationDate: Date;
        observations: string | null;
        responsibleId: string | null;
        startDate: Date | null;
        endDate: Date | null;
        purpose: string | null;
        donor: string | null;
        donationDate: Date | null;
        document: string | null;
        createdById: string;
        createdAt: Date;
        updatedAt: Date;
    }) | null>;
}
//# sourceMappingURL=AssetOperationService.d.ts.map