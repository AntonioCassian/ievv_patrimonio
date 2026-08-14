export interface JwtPayload {
    id: string;
    email: string;
}
export interface LoginData {
    email: string;
    password: string;
}
export interface ForgotPasswordData {
    email: string;
}
export interface ResetPasswordData {
    token: string;
    password: string;
}
//# sourceMappingURL=auth.types.d.ts.map