import type { Request, Response } from "express";
declare class AuthController {
    login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    logout: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    forgotPassword: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    resetPassword: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    me: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: AuthController;
export default _default;
//# sourceMappingURL=AuthController.d.ts.map