import type { Request, Response } from "express";
import { DashboardService } from "../services/DashboardService.js";

export class DashboardController {

    private readonly dashboardService: DashboardService;

    constructor() {
        this.dashboardService =
            new DashboardService();
    }

    getDashboard = async (
        req: Request,
        res: Response
    ) => {

        try {

            // =========================================
            // AUTENTICAÇÃO
            // =========================================

            const user = req.user;

            if (!user) {
                return res.status(401).json({
                    success: false,
                    message:
                        "Usuário não autenticado.",
                });
            }

            // =========================================
            // PERMISSÃO
            // =========================================

            const allowedRoles = [
                "ADMINISTRADOR",
                "PASTOR",
                "SUPERVISOR",
                "LIDER",
            ];

            if (
                !allowedRoles.includes(user.role)
            ) {
                return res.status(403).json({
                    success: false,
                    message:
                        "Usuário não possui permissão para visualizar o dashboard.",
                });
            }

            // =========================================
            // FILTROS
            // =========================================

            const {
                startDate,
                endDate,
            } = req.query;

            const filters: {
                startDate?: string;
                endDate?: string;
            } = {};

            if (
                typeof startDate === "string"
            ) {
                filters.startDate =
                    startDate;
            }

            if (
                typeof endDate === "string"
            ) {
                filters.endDate =
                    endDate;
            }

            // =========================================
            // CONSULTAR DASHBOARD
            // =========================================

            const dashboard =
                await this.dashboardService.getDashboard(
                    filters
                );

            // =========================================
            // RESPOSTA
            // =========================================

            return res.status(200).json({
                success: true,
                message:
                    "Dados do dashboard retornados com sucesso.",
                data: dashboard,
            });

        } catch (error) {

            console.error(
                "Erro no DashboardController:",
                error
            );

            // =========================================
            // DATA INICIAL INVÁLIDA
            // =========================================

            if (
                error instanceof Error &&
                error.message ===
                    "INVALID_START_DATE"
            ) {
                return res.status(400).json({
                    success: false,
                    message:
                        "A data inicial informada é inválida.",
                });
            }

            // =========================================
            // DATA FINAL INVÁLIDA
            // =========================================

            if (
                error instanceof Error &&
                error.message ===
                    "INVALID_END_DATE"
            ) {
                return res.status(400).json({
                    success: false,
                    message:
                        "A data final informada é inválida.",
                });
            }

            // =========================================
            // PERÍODO INVÁLIDO
            // =========================================

            if (
                error instanceof Error &&
                error.message ===
                    "INVALID_DATE_RANGE"
            ) {
                return res.status(400).json({
                    success: false,
                    message:
                        "A data inicial não pode ser posterior à data final.",
                });
            }

            // =========================================
            // ERRO INTERNO
            // =========================================

            return res.status(500).json({
                success: false,
                message:
                    "Erro interno ao consultar o dashboard.",
            });
        }
    };
}