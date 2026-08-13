import bcrypt from "bcrypt";

import prisma from "../lib/prisma.js";
import type {
    CreateUserDTO,
    UpdateUserDTO,
} from "../types/user.types.js";

export class UserService {
    async create(data: CreateUserDTO) {
        const existingUser = await prisma.user.findUnique({
            where: {
                email: data.email,
            },
        });

        if (existingUser) {
            throw new Error("E-mail já cadastrado");
        }

        const password = await bcrypt.hash(
            data.password,
            10
        );

        const user = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,

                ...(data.phone !== undefined && {
                    phone: data.phone,
                }),

                password,

                role: data.role,

                status: data.status ?? "ACTIVE",

                temporaryPassword:
                    data.temporaryPassword ?? false,

                ...(data.departmentId !== undefined && {
                    departmentId: data.departmentId,
                }),
            },

            include: {
                department: true,
            },
        });

        return user;
    }

    async findAll() {
        return prisma.user.findMany({
            include: {
                department: true,
            },

            orderBy: {
                createdAt: "desc",
            },
        });
    }

    async findById(id: string) {
        const user = await prisma.user.findUnique({
            where: {
                id,
            },

            include: {
                department: true,
            },
        });

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        return user;
    }

    async update(id: string, data: UpdateUserDTO) {
        const user = await prisma.user.findUnique({
            where: {
                id,
            },
        });

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        if (
            data.email !== undefined &&
            data.email !== user.email
        ) {
            const existingUser =
                await prisma.user.findUnique({
                    where: {
                        email: data.email,
                    },
                });

            if (existingUser) {
                throw new Error("E-mail já cadastrado");
            }
        }

        const updateData: Record<string, unknown> = {
            ...(data.name !== undefined && {
                name: data.name,
            }),

            ...(data.email !== undefined && {
                email: data.email,
            }),

            ...(data.phone !== undefined && {
                phone: data.phone,
            }),

            ...(data.role !== undefined && {
                role: data.role,
            }),

            ...(data.status !== undefined && {
                status: data.status,
            }),

            ...(data.temporaryPassword !== undefined && {
                temporaryPassword: data.temporaryPassword,
            }),

            ...(data.departmentId !== undefined && {
                departmentId: data.departmentId,
            }),
        };

        if (
            data.password !== undefined &&
            data.password !== ""
        ) {
            updateData.password = await bcrypt.hash(
                data.password,
                10
            );
        }

        return prisma.user.update({
            where: {
                id,
            },

            data: updateData,

            include: {
                department: true,
            },
        });
    }

    async delete(id: string) {
        const user = await prisma.user.findUnique({
            where: {
                id,
            },
        });

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        return prisma.user.delete({
            where: {
                id,
            },
        });
    }
}

export default new UserService();
