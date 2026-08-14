import type { CreateLoanDTO, UpdateLoanDTO } from "../schema/loan.schema.js";
export declare class LoanService {
    create(data: CreateLoanDTO, createdById: string): Promise<{
        asset: {
            category: string;
            code: string;
            id: string;
            name: string;
            status: import("../generated/prisma/enums.js").AssetStatus;
            type: string;
        };
        createdBy: {
            email: string;
            id: string;
            name: string;
        };
        responsible: {
            email: string;
            id: string;
            name: string;
            status: import("../generated/prisma/enums.js").UserStatus;
        };
    } & {
        id: string;
        assetId: string;
        responsibleId: string;
        createdById: string;
        purpose: string;
        withdrawalDate: Date;
        expectedReturnDate: Date;
        returnedAt: Date | null;
        status: import("../generated/prisma/enums.js").LoanStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        asset: {
            category: string;
            code: string;
            id: string;
            name: string;
            status: import("../generated/prisma/enums.js").AssetStatus;
            type: string;
        };
        createdBy: {
            email: string;
            id: string;
            name: string;
        };
        responsible: {
            email: string;
            id: string;
            name: string;
        };
    } & {
        id: string;
        assetId: string;
        responsibleId: string;
        createdById: string;
        purpose: string;
        withdrawalDate: Date;
        expectedReturnDate: Date;
        returnedAt: Date | null;
        status: import("../generated/prisma/enums.js").LoanStatus;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findById(id: string): Promise<{
        asset: {
            category: string;
            code: string;
            id: string;
            name: string;
            status: import("../generated/prisma/enums.js").AssetStatus;
            type: string;
        };
        createdBy: {
            email: string;
            id: string;
            name: string;
        };
        responsible: {
            email: string;
            id: string;
            name: string;
            status: import("../generated/prisma/enums.js").UserStatus;
        };
    } & {
        id: string;
        assetId: string;
        responsibleId: string;
        createdById: string;
        purpose: string;
        withdrawalDate: Date;
        expectedReturnDate: Date;
        returnedAt: Date | null;
        status: import("../generated/prisma/enums.js").LoanStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: UpdateLoanDTO): Promise<{
        asset: {
            category: string;
            code: string;
            id: string;
            name: string;
            status: import("../generated/prisma/enums.js").AssetStatus;
            type: string;
        };
        createdBy: {
            email: string;
            id: string;
            name: string;
        };
        responsible: {
            email: string;
            id: string;
            name: string;
            status: import("../generated/prisma/enums.js").UserStatus;
        };
    } & {
        id: string;
        assetId: string;
        responsibleId: string;
        createdById: string;
        purpose: string;
        withdrawalDate: Date;
        expectedReturnDate: Date;
        returnedAt: Date | null;
        status: import("../generated/prisma/enums.js").LoanStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: string): Promise<void>;
    returnLoan(id: string): Promise<{
        asset: {
            category: string;
            code: string;
            id: string;
            name: string;
            status: import("../generated/prisma/enums.js").AssetStatus;
            type: string;
        };
        createdBy: {
            email: string;
            id: string;
            name: string;
        };
        responsible: {
            email: string;
            id: string;
            name: string;
            status: import("../generated/prisma/enums.js").UserStatus;
        };
    } & {
        id: string;
        assetId: string;
        responsibleId: string;
        createdById: string;
        purpose: string;
        withdrawalDate: Date;
        expectedReturnDate: Date;
        returnedAt: Date | null;
        status: import("../generated/prisma/enums.js").LoanStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
//# sourceMappingURL=LoanService.d.ts.map