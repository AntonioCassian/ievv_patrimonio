import prisma from "../lib/prisma.js";
export class DashboardService {
    async getDashboard(filters = {}) {
        const { startDate, endDate } = filters;
        // =========================================
        // FILTRO DE DATA
        // =========================================
        const dateFilter = {};
        if (startDate) {
            const start = new Date(startDate);
            if (isNaN(start.getTime())) {
                throw new Error("INVALID_START_DATE");
            }
            start.setHours(0, 0, 0, 0);
            dateFilter.gte = start;
        }
        if (endDate) {
            const end = new Date(endDate);
            if (isNaN(end.getTime())) {
                throw new Error("INVALID_END_DATE");
            }
            end.setHours(23, 59, 59, 999);
            dateFilter.lte = end;
        }
        if (dateFilter.gte &&
            dateFilter.lte &&
            dateFilter.gte > dateFilter.lte) {
            throw new Error("INVALID_DATE_RANGE");
        }
        // =========================================
        // FILTROS
        // =========================================
        const assetWhere = {
            ...(Object.keys(dateFilter).length > 0 && {
                createdAt: dateFilter,
            }),
            status: {
                not: "DISPOSED",
            },
        };
        const availableAssetWhere = {
            ...assetWhere,
            status: "AVAILABLE",
        };
        const inUseAssetWhere = {
            ...assetWhere,
            status: "IN_USE",
        };
        const loanWhere = {
            ...(Object.keys(dateFilter).length > 0 && {
                createdAt: dateFilter,
            }),
            status: "ACTIVE",
        };
        const usufructWhere = {
            ...(Object.keys(dateFilter).length > 0 && {
                createdAt: dateFilter,
            }),
            type: "USUFRUTO",
            status: "ACTIVE",
        };
        const donationWhere = {
            ...(Object.keys(dateFilter).length > 0 && {
                createdAt: dateFilter,
            }),
            type: "DOACAO",
        };
        // =========================================
        // INDICADORES
        // =========================================
        const [totalAssets, availableAssets, borrowedAssets, assetsInUsufruct, totalDonations, activeLoans, activeUsufructs, 
        // =====================================
        // GRÁFICOS
        // =====================================
        assetsByStatus, assetsByCategory, operationsByType,] = await Promise.all([
            // =====================================
            // TOTAL DE PATRIMÔNIOS
            // =====================================
            prisma.asset.count({
                where: assetWhere,
            }),
            // =====================================
            // PATRIMÔNIOS DISPONÍVEIS
            // =====================================
            prisma.asset.count({
                where: availableAssetWhere,
            }),
            // =====================================
            // PATRIMÔNIOS EM USO / EMPRÉSTIMO
            // =====================================
            prisma.asset.count({
                where: inUseAssetWhere,
            }),
            // =====================================
            // PATRIMÔNIOS EM USUFRUTO
            // =====================================
            prisma.assetOperation.count({
                where: usufructWhere,
            }),
            // =====================================
            // TOTAL DE DOAÇÕES
            // =====================================
            prisma.assetOperation.count({
                where: donationWhere,
            }),
            // =====================================
            // EMPRÉSTIMOS ATIVOS
            // =====================================
            prisma.loan.count({
                where: loanWhere,
            }),
            // =====================================
            // USUFRUTOS ATIVOS
            // =====================================
            prisma.assetOperation.count({
                where: usufructWhere,
            }),
            // =====================================
            // GRÁFICO - PATRIMÔNIOS POR STATUS
            // =====================================
            prisma.asset.groupBy({
                by: ["status"],
                where: {
                    ...(Object.keys(dateFilter).length > 0 && {
                        createdAt: dateFilter,
                    }),
                },
                _count: {
                    _all: true,
                },
            }),
            // =====================================
            // GRÁFICO - PATRIMÔNIOS POR CATEGORIA
            // =====================================
            prisma.asset.groupBy({
                by: ["category"],
                where: assetWhere,
                _count: {
                    _all: true,
                },
                orderBy: {
                    _count: {
                        category: "desc",
                    },
                },
            }),
            // =====================================
            // GRÁFICO - OPERAÇÕES
            // =====================================
            prisma.assetOperation.groupBy({
                by: ["type"],
                where: {
                    ...(Object.keys(dateFilter).length > 0 && {
                        createdAt: dateFilter,
                    }),
                },
                _count: {
                    _all: true,
                },
            }),
        ]);
        // =========================================
        // FORMATAR GRÁFICO DE STATUS
        // =========================================
        const statusChart = assetsByStatus.map((item) => ({
            status: item.status,
            total: item._count._all,
        }));
        // =========================================
        // FORMATAR GRÁFICO DE CATEGORIAS
        // =========================================
        const categoryChart = assetsByCategory.map((item) => ({
            category: item.category,
            total: item._count._all,
        }));
        // =========================================
        // FORMATAR GRÁFICO DE OPERAÇÕES
        // =========================================
        const operationChart = operationsByType.map((item) => ({
            type: item.type,
            total: item._count._all,
        }));
        // =========================================
        // RETORNO
        // =========================================
        return {
            indicators: {
                totalAssets,
                availableAssets,
                borrowedAssets,
                assetsInUsufruct,
                totalDonations,
                activeLoans,
                activeUsufructs,
            },
            charts: {
                assetsByStatus: statusChart,
                assetsByCategory: categoryChart,
                operationsByType: operationChart,
            },
            filters: {
                startDate: startDate ?? null,
                endDate: endDate ?? null,
            },
            hasData: totalAssets > 0 ||
                totalDonations > 0 ||
                activeLoans > 0 ||
                activeUsufructs > 0,
        };
    }
}
//# sourceMappingURL=DashboardService.js.map