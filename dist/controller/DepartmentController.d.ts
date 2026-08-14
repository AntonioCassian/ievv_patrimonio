import type { Request, Response } from "express";
export declare class DepartmentController {
    private departmentService;
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
}
//# sourceMappingURL=DepartmentController.d.ts.map