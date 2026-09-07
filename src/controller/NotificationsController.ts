import type {
    Request,
    Response,
} from "express";

import { ZodError } from "zod";
import NotificationsService from "../services/NotificationsService.js";

export class NotificationController {
    private readonly notificationService =
        NotificationsService;

    // ==========================================
    // CONFIGURAÇÕES
    // ==========================================

    getSettings = async (
        req: Request,
        res: Response
    ) => {
        try {
            const user = req.user;

            if (!user) {
                return res.status(401).json({
                    success: false,
                    message:
                        "Usuário não autenticado.",
                });
            }

            const settings =
                await this.notificationService.getSettings(
                    user.id
                );

            return res.status(200).json({
                success: true,
                data: settings,
            });
        } catch (error) {
            console.error(error);

            if (
                error instanceof Error &&
                error.message === "USER_NOT_FOUND"
            ) {
                return res.status(404).json({
                    success: false,
                    message:
                        "Usuário não encontrado.",
                });
            }

            return res.status(500).json({
                success: false,
                message:
                    "Erro ao buscar configurações de notificações.",
            });
        }
    };

    // ==========================================
    // ATUALIZAR CONFIGURAÇÕES
    // ==========================================

    updateSettings = async (
        req: Request,
        res: Response
    ) => {
        try {
            const user = req.user;

            if (!user) {
                return res.status(401).json({
                    success: false,
                    message:
                        "Usuário não autenticado.",
                });
            }

            const settings =
                await this.notificationService.updateSettings(
                    user.id,
                    req.body
                );

            return res.status(200).json({
                success: true,
                message:
                    "Configurações de notificações atualizadas com sucesso.",
                data: settings,
            });
        } catch (error) {
            console.error(error);

            if (error instanceof ZodError) {
                return res.status(400).json({
                    success: false,
                    message:
                        "Dados inválidos.",
                    errors: error.issues.map(
                        (issue) => ({
                            field:
                                issue.path.join("."),
                            message:
                                issue.message,
                        })
                    ),
                });
            }

            if (
                error instanceof Error &&
                error.message === "USER_NOT_FOUND"
            ) {
                return res.status(404).json({
                    success: false,
                    message:
                        "Usuário não encontrado.",
                });
            }

            return res.status(500).json({
                success: false,
                message:
                    "Erro ao atualizar configurações de notificações.",
            });
        }
    };

    // ==========================================
    // LISTAR NOTIFICAÇÕES
    // ==========================================

    findAll = async (
        req: Request,
        res: Response
    ) => {
        try {
            const user = req.user;

            if (!user) {
                return res.status(401).json({
                    success: false,
                    message:
                        "Usuário não autenticado.",
                });
            }

            const notifications =
                await this.notificationService.findAll(
                    user.id
                );

            return res.status(200).json({
                success: true,
                data: notifications,
            });
        } catch (error) {
            console.error(error);

            return res.status(500).json({
                success: false,
                message:
                    "Erro ao buscar notificações.",
            });
        }
    };

    // ==========================================
    // APAGAR UMA NOTIFICAÇÃO
    // ==========================================

    delete = async (
        req: Request<{
            id: string;
        }>,
        res: Response
    ) => {
        try {
            const user = req.user;

            if (!user) {
                return res.status(401).json({
                    success: false,
                    message:
                        "Usuário não autenticado.",
                });
            }

            const result =
                await this.notificationService.delete(
                    req.params.id
                );

            return res.status(200).json(result);
        } catch (error) {
            console.error(error);

            return res.status(500).json({
                success: false,
                message:
                    "Erro ao dispensar notificação.",
            });
        }
    };

    // ==========================================
    // APAGAR TODAS
    // ==========================================

    deleteAll = async (
        req: Request,
        res: Response
    ) => {
        try {
            const user = req.user;

            if (!user) {
                return res.status(401).json({
                    success: false,
                    message:
                        "Usuário não autenticado.",
                });
            }

            const result =
                await this.notificationService.deleteAll();

            return res.status(200).json(result);
        } catch (error) {
            console.error(error);

            return res.status(500).json({
                success: false,
                message:
                    "Erro ao dispensar notificações.",
            });
        }
    };
}