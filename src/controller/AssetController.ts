import type {
    Request,
    Response,
} from "express";

import { AssetService } from "../services/AssetService.js";

export class AssetController {
    private assetService: AssetService;

    constructor() {
        this.assetService =
            new AssetService();
    }

    create = async (
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

            const asset =
                await this.assetService.create(
                    req.body,
                    user.id
                );

            return res.status(201).json({
                success: true,
                message:
                    "Patrimônio cadastrado com sucesso.",
                data: asset,
            });
        } catch (error) {
            console.error(error);

            if (error instanceof Error) {
                if (
                    error.message ===
                    "DEPARTMENT_NOT_FOUND"
                ) {
                    return res.status(404).json({
                        success: false,
                        message:
                            "Departamento não encontrado.",
                    });
                }

                if (
                    error.message ===
                    "RESPONSIBLE_NOT_FOUND"
                ) {
                    return res.status(404).json({
                        success: false,
                        message:
                            "Responsável não encontrado.",
                    });
                }

                if (
                    error.message ===
                    "ASSET_CODE_ALREADY_EXISTS"
                ) {
                    return res.status(409).json({
                        success: false,
                        message:
                            "Conflito ao gerar o código patrimonial.",
                    });
                }
            }

            return res.status(500).json({
                success: false,
                message:
                    "Erro interno do servidor.",
            });
        }
    };

    findAll = async (
        req: Request,
        res: Response
    ) => {
        try {
            const assets =
                await this.assetService.findAll(
                    req.query
                );

            return res.status(200).json({
                success: true,
                data: assets,
            });
        } catch (error) {
            console.error(error);

            if (
                error instanceof Error &&
                error.message ===
                "DEPARTMENT_NOT_FOUND"
            ) {
                return res.status(404).json({
                    success: false,
                    message:
                        "Departamento não encontrado.",
                });
            }

            return res.status(500).json({
                success: false,
                message:
                    "Erro ao buscar patrimônios.",
            });
        }
    };

    findById = async (
        req: Request<{ id: string }>,
        res: Response
    ) => {
        try {
            const asset =
                await this.assetService.findById(
                    req.params.id
                );

            return res.status(200).json({
                success: true,
                data: asset,
            });
        } catch (error) {
            console.error(error);

            if (
                error instanceof Error &&
                error.message ===
                "ASSET_NOT_FOUND"
            ) {
                return res.status(404).json({
                    success: false,
                    message:
                        "Patrimônio não encontrado.",
                });
            }

            return res.status(500).json({
                success: false,
                message:
                    "Erro ao buscar patrimônio.",
            });
        }
    };

    update = async (
        req: Request<{ id: string }>,
        res: Response
    ) => {
        try {
            const asset =
                await this.assetService.update(
                    req.params.id,
                    req.body
                );

            return res.status(200).json({
                success: true,
                message:
                    "Patrimônio atualizado com sucesso.",
                data: asset,
            });
        } catch (error) {
            console.error(error);

            if (error instanceof Error) {
                if (
                    error.message ===
                    "ASSET_NOT_FOUND"
                ) {
                    return res.status(404).json({
                        success: false,
                        message:
                            "Patrimônio não encontrado.",
                    });
                }

                if (
                    error.message ===
                    "DEPARTMENT_NOT_FOUND"
                ) {
                    return res.status(404).json({
                        success: false,
                        message:
                            "Departamento não encontrado.",
                    });
                }

                if (
                    error.message ===
                    "RESPONSIBLE_NOT_FOUND"
                ) {
                    return res.status(404).json({
                        success: false,
                        message:
                            "Responsável não encontrado.",
                    });
                }
            }

            return res.status(500).json({
                success: false,
                message:
                    "Erro ao atualizar patrimônio.",
            });
        }
    };

    delete = async (
        req: Request<{ id: string }>,
        res: Response
    ) => {
        try {
            await this.assetService.delete(
                req.params.id
            );

            return res.status(204).send();
        } catch (error) {
            console.error(error);

            if (
                error instanceof Error &&
                error.message ===
                "ASSET_NOT_FOUND"
            ) {
                return res.status(404).json({
                    success: false,
                    message:
                        "Patrimônio não encontrado.",
                });
            }

            return res.status(500).json({
                success: false,
                message:
                    "Erro ao excluir patrimônio.",
            });
        }
    };
}