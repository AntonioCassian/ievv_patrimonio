import type { CreateUserDTO, UpdateUserDTO } from "../types/user.types.js";
export declare class UserService {
    create(data: CreateUserDTO): Promise<{
        department: {
            id: string;
            name: string;
            status: import("../generated/prisma/enums.js").DepartmentStatus;
            leaderId: string;
            createdById: string | null;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    } & {
        id: string;
        name: string;
        email: string;
        phone: string | null;
        password: string | null;
        role: import("../generated/prisma/enums.js").Role;
        status: import("../generated/prisma/enums.js").UserStatus;
        temporaryPassword: boolean;
        lastLoginAt: Date | null;
        departmentId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        department: {
            id: string;
            name: string;
            status: import("../generated/prisma/enums.js").DepartmentStatus;
            leaderId: string;
            createdById: string | null;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    } & {
        id: string;
        name: string;
        email: string;
        phone: string | null;
        password: string | null;
        role: import("../generated/prisma/enums.js").Role;
        status: import("../generated/prisma/enums.js").UserStatus;
        temporaryPassword: boolean;
        lastLoginAt: Date | null;
        departmentId: string | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findById(id: string): Promise<{
        department: {
            id: string;
            name: string;
            status: import("../generated/prisma/enums.js").DepartmentStatus;
            leaderId: string;
            createdById: string | null;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    } & {
        id: string;
        name: string;
        email: string;
        phone: string | null;
        password: string | null;
        role: import("../generated/prisma/enums.js").Role;
        status: import("../generated/prisma/enums.js").UserStatus;
        temporaryPassword: boolean;
        lastLoginAt: Date | null;
        departmentId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: UpdateUserDTO): Promise<{
        department: {
            id: string;
            name: string;
            status: import("../generated/prisma/enums.js").DepartmentStatus;
            leaderId: string;
            createdById: string | null;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    } & {
        id: string;
        name: string;
        email: string;
        phone: string | null;
        password: string | null;
        role: import("../generated/prisma/enums.js").Role;
        status: import("../generated/prisma/enums.js").UserStatus;
        temporaryPassword: boolean;
        lastLoginAt: Date | null;
        departmentId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        password: string | null;
        role: import("../generated/prisma/enums.js").Role;
        status: import("../generated/prisma/enums.js").UserStatus;
        temporaryPassword: boolean;
        lastLoginAt: Date | null;
        departmentId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
declare const _default: UserService;
export default _default;
//# sourceMappingURL=UserService.d.ts.map