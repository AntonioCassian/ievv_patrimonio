import type { Request, Response } from "express";
export declare class DashboardController {
    private readonly dashboardService;
    constructor();
    getDashboard: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=DashboardController.d.ts.map