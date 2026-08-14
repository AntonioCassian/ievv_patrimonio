import { ZodError } from "zod";
import { AssetOperationService, } from "../services/AssetOperationService.js";
export class AssetOperationController {
    service;
    constructor() {
        this.service =
            new AssetOperationService();
    }
    create = async (req, res) => {
        try {
            const user = req.user;
            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: "Usuário não autenticado.",
                });
            }
            const operation = await this.service.create(req.body, user.id);
            return res.status(201).json({
                success: true,
                message: "Operação registrada com sucesso.",
                data: operation,
            });
        }
        catch (error) {
            console.error(error);
            if (error instanceof ZodError) {
                return res.status(400).json({
                    success: false,
                    message: "Dados inválidos.",
                    errors: error.issues.map((issue) => ({
                        field: issue.path.join("."),
                        message: issue.message,
                    })),
                });
            }
            if (error instanceof Error) {
                switch (error.message) {
                    case "ASSET_NOT_FOUND":
                        return res.status(404).json({
                            success: false,
                            message: "Patrimônio não encontrado.",
                        });
                    case "INSUFFICIENT_QUANTITY":
                        return res.status(409).json({
                            success: false,
                            message: "Quantidade disponível insuficiente.",
                        });
                    case "RESPONSIBLE_NOT_FOUND":
                        return res.status(404).json({
                            success: false,
                            message: "Responsável não encontrado.",
                        });
                    case "RESPONSIBLE_INACTIVE":
                        return res.status(409).json({
                            success: false,
                            message: "O responsável está inativo.",
                        });
                }
            }
            return res.status(500).json({
                success: false,
                message: "Erro interno do servidor.",
            });
        }
    };
    findAll = async (_req, res) => {
        try {
            const operations = await this.service.findAll();
            return res.status(200).json({
                success: true,
                data: operations,
            });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Erro ao buscar operações.",
            });
        }
    };
    findById = async (req, res) => {
        try {
            const operation = await this.service.findById(req.params.id);
            return res.status(200).json({
                success: true,
                data: operation,
            });
        }
        catch (error) {
            if (error instanceof Error &&
                error.message ===
                    "OPERATION_NOT_FOUND") {
                return res.status(404).json({
                    success: false,
                    message: "Operação não encontrada.",
                });
            }
            return res.status(500).json({
                success: false,
                message: "Erro ao buscar operação.",
            });
        }
    };
    update = async (req, res) => {
        try {
            const operation = await this.service.update(req.params.id, req.body);
            return res.status(200).json({
                success: true,
                message: "Operação atualizada com sucesso.",
                data: operation,
            });
        }
        catch (error) {
            if (error instanceof Error) {
                switch (error.message) {
                    case "OPERATION_NOT_FOUND":
                        return res.status(404).json({
                            success: false,
                            message: "Operação não encontrada.",
                        });
                    case "DONATION_CANNOT_BE_UPDATED":
                        return res.status(409).json({
                            success: false,
                            message: "Operações de doação não podem ser alteradas.",
                        });
                    case "OPERATION_NOT_ACTIVE":
                        return res.status(409).json({
                            success: false,
                            message: "A operação não está ativa.",
                        });
                }
            }
            return res.status(500).json({
                success: false,
                message: "Erro interno do servidor.",
            });
        }
    };
    delete = async (req, res) => {
        try {
            await this.service.delete(req.params.id);
            return res.status(204).send();
        }
        catch (error) {
            if (error instanceof Error) {
                if (error.message ===
                    "OPERATION_NOT_FOUND") {
                    return res.status(404).json({
                        success: false,
                        message: "Operação não encontrada.",
                    });
                }
                if (error.message ===
                    "ACTIVE_OPERATION_CANNOT_BE_DELETED") {
                    return res.status(409).json({
                        success: false,
                        message: "Operações ativas não podem ser excluídas.",
                    });
                }
            }
            return res.status(500).json({
                success: false,
                message: "Erro interno do servidor.",
            });
        }
    };
    renew = async (req, res) => {
        try {
            const user = req.user;
            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: "Usuário não autenticado.",
                });
            }
            const operation = await this.service.renewUsufruct(req.params.id, req.body, user.id);
            return res.status(200).json({
                success: true,
                message: "Usufruto renovado com sucesso.",
                data: operation,
            });
        }
        catch (error) {
            if (error instanceof Error) {
                switch (error.message) {
                    case "OPERATION_NOT_FOUND":
                        return res.status(404).json({
                            success: false,
                            message: "Usufruto não encontrado.",
                        });
                    case "DONATION_CANNOT_BE_RENEWED":
                        return res.status(409).json({
                            success: false,
                            message: "Doações não podem ser renovadas.",
                        });
                    case "USUFRUCT_NOT_ACTIVE":
                        return res.status(409).json({
                            success: false,
                            message: "O usufruto não está ativo.",
                        });
                    case "END_DATE_NOT_FOUND":
                        return res.status(400).json({
                            success: false,
                            message: "O usufruto não possui data de término.",
                        });
                    case "INVALID_RENEWAL_DATE":
                        return res.status(400).json({
                            success: false,
                            message: "A nova data de término deve ser posterior à data atual de término.",
                        });
                }
            }
            return res.status(500).json({
                success: false,
                message: "Erro interno do servidor.",
            });
        }
    };
}
//# sourceMappingURL=AssetOperationController.js.map