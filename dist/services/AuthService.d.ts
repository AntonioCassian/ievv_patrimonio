import type { ForgotPasswordData, LoginData, ResetPasswordData } from "../types/auth.types.js";
declare class AuthService {
    login({ email, password }: LoginData): Promise<{
        token: string;
        user: {
            id: string;
            name: string;
            email: string;
            phone: string | null;
            role: import("../generated/prisma/enums.js").Role;
            status: "ACTIVE";
            temporaryPassword: boolean;
            departmentId: string | null;
            department: {
                id: string;
                name: string;
                status: import("../generated/prisma/enums.js").DepartmentStatus;
                leaderId: string;
                createdById: string | null;
                createdAt: Date;
                updatedAt: Date;
            } | null;
            lastLoginAt: Date;
        };
        permissions: never[];
    }>;
    forgotPassword({ email, }: ForgotPasswordData): Promise<{
        message: string;
    }>;
    resetPassword({ token, password, }: ResetPasswordData): Promise<{
        message: string;
    }>;
    getMe(userId: string): Promise<{
        department: {
            id: string;
            name: string;
            status: import("../generated/prisma/enums.js").DepartmentStatus;
        } | null;
        email: string;
        id: string;
        lastLoginAt: Date | null;
        name: string;
        phone: string | null;
        role: import("../generated/prisma/enums.js").Role;
        status: import("../generated/prisma/enums.js").UserStatus;
        temporaryPassword: boolean;
    }>;
}
declare const _default: AuthService;
export default _default;
//# sourceMappingURL=AuthService.d.ts.map