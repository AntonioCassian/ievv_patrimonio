import type { Role, UserStatus } from "../generated/prisma/enums.js";
export interface CreateUserDTO {
    name: string;
    email: string;
    phone?: string;
    password: string;
    role: Role;
    status?: UserStatus;
    temporaryPassword?: boolean;
    departmentId?: string;
}
export interface UpdateUserDTO {
    name?: string;
    email?: string;
    phone?: string;
    password?: string;
    role?: Role;
    status?: UserStatus;
    temporaryPassword?: boolean;
    departmentId?: string;
}
export interface UserResponse {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    role: Role;
    status: UserStatus;
    temporaryPassword: boolean;
    departmentId: string | null;
    lastLoginAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=user.types.d.ts.map