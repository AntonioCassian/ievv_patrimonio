import { z } from "zod";

export const createDepartmentSchema = z.object({
    name: z
        .string()
        .trim()
        .min(
            1,
            "O nome do departamento é obrigatório"
        )
        .max(
            100,
            "O nome do departamento deve ter no máximo 100 caracteres"
        ),

    leaderId: z
        .string()
        .min(
            1,
            "O líder responsável é obrigatório"
        ),
});

export const updateDepartmentSchema = z.object({
    name: z
        .string()
        .trim()
        .min(
            1,
            "O nome do departamento é obrigatório"
        )
        .max(
            100,
            "O nome do departamento deve ter no máximo 100 caracteres"
        )
        .optional(),

    leaderId: z
        .string()
        .min(
            1,
            "O líder responsável é obrigatório"
        )
        .optional(),

    status: z
        .enum(["ACTIVE", "INACTIVE"])
        .optional(),
});

export const departmentIdSchema = z.object({
    id: z
        .string()
        .min(
            1,
            "ID do departamento é obrigatório"
        ),
});