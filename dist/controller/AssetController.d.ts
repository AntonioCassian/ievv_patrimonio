import type { Request, Response } from "express";
export declare class AssetController {
    private assetService;
    constructor();
    create: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findById: (req: Request<{
        id: string;
    }>, res: Response) => Promise<Response<any, Record<string, any>>>;
    update: (req: Request<{
        id: string;
    }>, res: Response) => Promise<Response<any, Record<string, any>>>;
    delete: (req: Request<{
        id: string;
    }>, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=AssetController.d.ts.map