export interface DashboardFiltersDTO {
    startDate?: string;
    endDate?: string;
}
export declare class DashboardService {
    getDashboard(filters?: DashboardFiltersDTO): Promise<{
        indicators: {
            totalAssets: number;
            availableAssets: number;
            borrowedAssets: number;
            assetsInUsufruct: number;
            totalDonations: number;
            activeLoans: number;
            activeUsufructs: number;
        };
        charts: {
            assetsByStatus: {
                status: import("../generated/prisma/enums.js").AssetStatus;
                total: number;
            }[];
            assetsByCategory: {
                category: string;
                total: number;
            }[];
            operationsByType: {
                type: import("../generated/prisma/enums.js").OperationType;
                total: number;
            }[];
        };
        filters: {
            startDate: string | null;
            endDate: string | null;
        };
        hasData: boolean;
    }>;
}
//# sourceMappingURL=DashboardService.d.ts.map