import type { Request, Response } from "express";
import { churchSettingsService } from "../services/ChurchSettingsService.js";

export class ChurchSettingsController {
    create = async (req: Request, res: Response) => {
        try {
            const settings =
                await churchSettingsService.create(req.body);

            return res.status(201).json({
                message:
                    "Configurações da igreja criadas com sucesso.",
                data: settings,
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({
                    message: error.message,
                });
            }

            return res.status(500).json({
                message: "Erro interno do servidor.",
            });
        }
    };

    find = async (_req: Request, res: Response) => {
        try {
            const settings =
                await churchSettingsService.find();

            if (!settings) {
                return res.status(404).json({
                    message:
                        "Configurações da igreja não encontradas.",
                });
            }

            return res.status(200).json({
                data: settings,
            });
        } catch (error) {
            return res.status(500).json({
                message:
                    "Erro ao buscar configurações da igreja.",
            });
        }
    };

    update = async (req: Request<{ id: string }>, res: Response) => {
        try {
            const { id } = req.params;

            const settings =
                await churchSettingsService.update(
                    id,
                    req.body
                );

            return res.status(200).json({
                message:
                    "Configurações da igreja atualizadas com sucesso.",
                data: settings,
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({
                    message: error.message,
                });
            }

            return res.status(500).json({
                message: "Erro interno do servidor.",
            });
        }
    };

    delete = async (
        req: Request<{ id: string }>,
        res: Response
    ) => {
        try {
            const { id } = req.params;

            await churchSettingsService.delete(id);

            return res.status(200).json({
                message:
                    "Configurações da igreja excluídas com sucesso.",
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({
                    message: error.message,
                });
            }

            return res.status(500).json({
                message: "Erro interno do servidor.",
            });
        }
    };

}

export const churchSettingsController =
    new ChurchSettingsController();
