import type {
    Request,
    Response,
} from "express";

import { ZodError } from "zod";
import { LoanService } from "../services/LoanService.js";


export class LoanController {
    private readonly loanService: LoanService;

    constructor() {
        this.loanService = new LoanService();
    }

    // =========================
    // CREATE
    // =========================

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

            const loan =
                await this.loanService.create(
                    req.body,
                    user.id
                );

            return res.status(201).json({
                success: true,
                message:
                    "Empréstimo cadastrado com sucesso.",
                data: loan,
            });
        } catch (error) {
            console.error(error);

            if (error instanceof ZodError) {
                return res.status(400).json({
                    success: false,
                    message: "Dados inválidos.",
                    errors: error.issues.map(
                        (issue) => ({
                            field: issue.path.join(
                                "."
                            ),
                            message:
                                issue.message,
                        })
                    ),
                });
            }

            if (error instanceof Error) {
                switch (error.message) {
                    case "ASSET_NOT_FOUND":
                        return res.status(404).json({
                            success: false,
                            message:
                                "Patrimônio não encontrado.",
                        });

                    case "ASSET_NOT_AVAILABLE":
                        return res.status(409).json({
                            success: false,
                            message:
                                "O patrimônio não está disponível para empréstimo.",
                        });

                    case "RESPONSIBLE_NOT_FOUND":
                        return res.status(404).json({
                            success: false,
                            message:
                                "Responsável não encontrado.",
                        });

                    case "RESPONSIBLE_INACTIVE":
                        return res.status(409).json({
                            success: false,
                            message:
                                "O responsável está inativo.",
                        });

                    case "CREATOR_NOT_FOUND":
                        return res.status(401).json({
                            success: false,
                            message:
                                "Usuário responsável pelo cadastro não encontrado.",
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

    // =========================
    // FIND ALL
    // =========================

    findAll = async (
        _req: Request,
        res: Response
    ) => {
        try {
            const loans =
                await this.loanService.findAll();

            return res.status(200).json({
                success: true,
                data: loans,
            });
        } catch (error) {
            console.error(error);

            return res.status(500).json({
                success: false,
                message:
                    "Erro ao buscar empréstimos.",
            });
        }
    };

    // =========================
    // FIND BY ID
    // =========================

    findById = async (
        req: Request<{
            id: string;
        }>,
        res: Response
    ) => {
        try {
            const loan =
                await this.loanService.findById(
                    req.params.id
                );

            return res.status(200).json({
                success: true,
                data: loan,
            });
        } catch (error) {
            console.error(error);

            if (
                error instanceof Error &&
                error.message ===
                "LOAN_NOT_FOUND"
            ) {
                return res.status(404).json({
                    success: false,
                    message:
                        "Empréstimo não encontrado.",
                });
            }

            return res.status(500).json({
                success: false,
                message:
                    "Erro ao buscar empréstimo.",
            });
        }
    };

    // =========================
    // UPDATE
    // =========================

    update = async (
        req: Request<{
            id: string;
        }>,
        res: Response
    ) => {
        try {
            const loan =
                await this.loanService.update(
                    req.params.id,
                    req.body
                );

            return res.status(200).json({
                success: true,
                message:
                    "Empréstimo atualizado com sucesso.",
                data: loan,
            });
        } catch (error) {
            console.error(error);

            if (error instanceof ZodError) {
                return res.status(400).json({
                    success: false,
                    message: "Dados inválidos.",
                    errors: error.issues.map(
                        (issue) => ({
                            field: issue.path.join(
                                "."
                            ),
                            message:
                                issue.message,
                        })
                    ),
                });
            }

            if (error instanceof Error) {
                switch (error.message) {
                    case "LOAN_NOT_FOUND":
                        return res.status(404).json({
                            success: false,
                            message:
                                "Empréstimo não encontrado.",
                        });

                    case "LOAN_NOT_ACTIVE":
                        return res.status(409).json({
                            success: false,
                            message:
                                "Somente empréstimos ativos podem ser alterados.",
                        });

                    case "RESPONSIBLE_NOT_FOUND":
                        return res.status(404).json({
                            success: false,
                            message:
                                "Responsável não encontrado.",
                        });

                    case "RESPONSIBLE_INACTIVE":
                        return res.status(409).json({
                            success: false,
                            message:
                                "O responsável está inativo.",
                        });

                    case "INVALID_DATES":
                        return res.status(400).json({
                            success: false,
                            message:
                                "Datas inválidas.",
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

    // =========================
    // DELETE
    // =========================

    delete = async (
        req: Request<{
            id: string;
        }>,
        res: Response
    ) => {
        try {
            await this.loanService.delete(
                req.params.id
            );

            return res.status(204).send();
        } catch (error) {
            console.error(error);

            if (error instanceof Error) {
                switch (error.message) {
                    case "LOAN_NOT_FOUND":
                        return res.status(404).json({
                            success: false,
                            message:
                                "Empréstimo não encontrado.",
                        });

                    case "LOAN_CANNOT_BE_DELETED":
                        return res.status(409).json({
                            success: false,
                            message:
                                "Empréstimos não podem ser excluídos.",
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

    // =========================
    // RETURN
    // =========================

    return = async (
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

            const loan =
                await this.loanService.returnLoan(
                    req.params.id,
                    user.id,
                    req.body
                );

            return res.status(200).json({
                success: true,
                message:
                    "Patrimônio devolvido com sucesso.",
                data: loan,
            });
        } catch (error) {
            console.error(error);

            if (error instanceof ZodError) {
                return res.status(400).json({
                    success: false,
                    message: "Dados inválidos.",
                    errors: error.issues.map(
                        (issue) => ({
                            field: issue.path.join(
                                "."
                            ),
                            message:
                                issue.message,
                        })
                    ),
                });
            }

            if (error instanceof Error) {
                switch (error.message) {
                    case "LOAN_NOT_FOUND":
                        return res.status(404).json({
                            success: false,
                            message:
                                "Empréstimo não encontrado.",
                        });

                    case "LOAN_ALREADY_RETURNED":
                        return res.status(409).json({
                            success: false,
                            message:
                                "Este empréstimo já foi devolvido.",
                        });

                    case "ASSET_NOT_IN_USE":
                        return res.status(409).json({
                            success: false,
                            message:
                                "O patrimônio não está marcado como emprestado.",
                        });

                    case "RETURNER_NOT_FOUND":
                        return res.status(401).json({
                            success: false,
                            message:
                                "Usuário responsável pela devolução não encontrado.",
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

    // =========================
    // HISTORY
    // =========================

    findHistory = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { patrimonioId } =
                req.query;

            const history =
                await this.loanService.findHistory(
                    typeof patrimonioId ===
                        "string"
                        ? patrimonioId
                        : undefined
                );

            return res.status(200).json({
                success: true,
                data: history,
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
                    "Erro ao buscar histórico de empréstimos.",
            });
        }
    };

    // =========================
    // HISTORY BY ID
    // =========================

    findHistoryById = async (
        req: Request<{
            id: string;
        }>,
        res: Response
    ) => {
        try {
            const history =
                await this.loanService.findHistoryById(
                    req.params.id
                );

            return res.status(200).json({
                success: true,
                data: history,
            });
        } catch (error) {
            console.error(error);

            if (
                error instanceof Error &&
                error.message ===
                "LOAN_HISTORY_NOT_FOUND"
            ) {
                return res.status(404).json({
                    success: false,
                    message:
                        "Registro histórico não encontrado.",
                });
            }

            return res.status(500).json({
                success: false,
                message:
                    "Erro ao buscar registro histórico.",
            });
        }
    };
}
