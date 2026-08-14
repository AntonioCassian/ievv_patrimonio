import type { CreateDepartmentDTO, UpdateDepartmentDTO } from "../types/department.types.js";
export declare class DepartmentService {
    create(data: CreateDepartmentDTO, createdById: string): Promise<{
        id: string;
        name: string;
        status: import("../generated/prisma/enums.js").DepartmentStatus;
        leaderId: string;
        createdById: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        createdBy: {
            email: string;
            id: string;
            name: string;
        } | null;
        leader: {
            email: string;
            id: string;
            name: string;
        };
    } & {
        id: string;
        name: string;
        status: import("../generated/prisma/enums.js").DepartmentStatus;
        leaderId: string;
        createdById: string | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findById(id: string): Promise<{
        createdBy: {
            email: string;
            id: string;
            name: string;
        } | null;
        leader: {
            email: string;
            id: string;
            name: string;
        };
        users: {
            email: string;
            id: string;
            name: string;
            role: import("../generated/prisma/enums.js").Role;
            status: import("../generated/prisma/enums.js").UserStatus;
        }[];
    } & {
        id: string;
        name: string;
        status: import("../generated/prisma/enums.js").DepartmentStatus;
        leaderId: string;
        createdById: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: UpdateDepartmentDTO): Promise<{
        id: string;
        name: string;
        status: import("../generated/prisma/enums.js").DepartmentStatus;
        leaderId: string;
        createdById: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: string): Promise<void>;
}
//# sourceMappingURL=DepartamentService.d.ts.map