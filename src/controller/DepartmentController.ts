import type { Request, Response } from "express";
import { DepartmentService } from "../services/DepartamentService.js";

export class DepartmentController {
    private departmentService: DepartmentService;

    constructor() {
        this.departmentService =
            new DepartmentService();
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
                    message: "Usuário não autenticado.",
                });
            }

            if (user.role !== "ADMINISTRADOR") {
                return res.status(403).json({
                    success: false,
                    message:
                        "Apenas administradores podem cadastrar departamentos.",
                });
            }

            const department =
                await this.departmentService.create(
                    req.body,
                    user.id
                );

            return res.status(201).json({
                success: true,
                message:
                    "Departamento cadastrado com sucesso.",
                data: department,
            });
        } catch (error) {
            console.error(error);

            if (error instanceof Error) {
                if (
                    error.message ===
                    "DEPARTMENT_ALREADY_EXISTS"
                ) {
                    return res.status(409).json({
                        success: false,
                        message:
                            "Já existe um departamento com este nome.",
                    });
                }

                if (
                    error.message ===
                    "LEADER_NOT_FOUND"
                ) {
                    return res.status(404).json({
                        success: false,
                        message:
                            "Líder responsável não encontrado.",
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
        _req: Request,
        res: Response
    ) => {
        try {
            const departments =
                await this.departmentService.findAll();

            return res.status(200).json(departments);
        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message:
                    "Erro ao buscar departamentos",
            });
        }
    };

    findById = async (
        req: Request<{ id: string }>,
        res: Response
    ) => {
        try {
            const department =
                await this.departmentService.findById(
                    req.params.id
                );

            return res.status(200).json(department);
        } catch (error) {
            console.error(error);

            if (error instanceof Error) {
                return res.status(404).json({
                    message: error.message,
                });
            }

            return res.status(500).json({
                message:
                    "Erro ao buscar departamento",
            });
        }
    };

    update = async (
        req: Request<{ id: string }>,
        res: Response
    ) => {
        try {
            const department =
                await this.departmentService.update(
                    req.params.id,
                    req.body
                );

            return res.status(200).json(department);
        } catch (error) {
            console.error(error);

            if (error instanceof Error) {
                if (
                    error.message ===
                    "DEPARTMENT_ALREADY_EXISTS"
                ) {
                    return res.status(409).json({
                        message:
                            "Já existe um departamento com este nome.",
                    });
                }

                if (
                    error.message ===
                    "LEADER_NOT_FOUND"
                ) {
                    return res.status(404).json({
                        message:
                            "Líder responsável não encontrado.",
                    });
                }

                if (
                    error.message ===
                    "Departamento não encontrado"
                ) {
                    return res.status(404).json({
                        message: error.message,
                    });
                }
            }

            return res.status(500).json({
                message:
                    "Erro ao atualizar departamento",
            });
        }
    };

    delete = async (
        req: Request<{ id: string }>,
        res: Response
    ) => {
        try {
            await this.departmentService.delete(
                req.params.id
            );

            return res.status(204).send();
        } catch (error) {
            console.error(error);

            if (error instanceof Error) {
                return res.status(404).json({
                    message: error.message,
                });
            }

            return res.status(500).json({
                message:
                    "Erro ao excluir departamento",
            });
        }
    };
}