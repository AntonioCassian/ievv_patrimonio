import type { Request, Response } from "express";
export declare class AssetOperationController {
    private readonly service;
    constructor();
    create: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findAll: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findById: (req: Request<{
        id: string;
    }>, res: Response) => Promise<Response<any, Record<string, any>>>;
    update: (req: Request<{
        id: string;
    }>, res: Response) => Promise<Response<any, Record<string, any>>>;
    delete: (req: Request<{
        id: string;
    }>, res: Response) => Promise<Response<any, Record<string, any>>>;
    renew: (req: Request<{
        id: string;
    }>, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=AssetOperationController.d.ts.map