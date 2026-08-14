import { Prisma } from "../generated/prisma/client.js";
import prisma from "../lib/prisma.js";
import type { AssetFiltersDTO } from "../schema/asset.schema.js";

import type {
    CreateAssetDTO,
    UpdateAssetDTO,
} from "../types/asset.types.js";

export class AssetService {

    private generateCode(): string {
        const timestamp =
            Date.now().toString(36).toUpperCase();

        const random =
            Math.random()
                .toString(36)
                .substring(2, 8)
                .toUpperCase();

        return `PAT-${timestamp}-${random}`;
    }

    async create(
        data: CreateAssetDTO,
        createdById: string
    ) {
        // Verifica se o departament existe
        const department =
            await prisma.department.findUnique({
                where: {
                    id: data.departmentId,
                },
            });

        if (!department) {
            throw new Error(
                "DEPARTMENT_NOT_FOUND"
            );
        }

        // Verifica o responsável
        if (data.responsibleId) {
            const responsible =
                await prisma.user.findUnique({
                    where: {
                        id: data.responsibleId,
                    },
                });

            if (!responsible) {
                throw new Error(
                    "RESPONSIBLE_NOT_FOUND"
                );
            }
        }

        // Gera código único
        let code = this.generateCode();

        while (
            await prisma.asset.findUnique({
                where: {
                    code,
                },
            })
        ) {
            code = this.generateCode();
        }

        try {
            return await prisma.asset.create({
                data: {
                    code,
                    name: data.name,
                    category: data.category,
                    departmentId: data.departmentId,
                    type: data.type,
                    status: "AVAILABLE",
                    createdById,

                    ...(data.description !== undefined && {
                        description: data.description,
                    }),

                    ...(data.responsibleId !== undefined && {
                        responsibleId: data.responsibleId,
                    }),

                    ...(data.value !== undefined && {
                        value: new Prisma.Decimal(data.value),
                    }),

                    ...(data.acquisitionDate !== undefined && {
                        acquisitionDate: new Date(
                            data.acquisitionDate
                        ),
                    }),

                    ...(data.imageUrl !== undefined && {
                        imageUrl: data.imageUrl,
                    }),
                },
            });
        } catch (error) {
            if (
                error instanceof
                Prisma.PrismaClientKnownRequestError &&
                error.code === "P2002"
            ) {
                throw new Error(
                    "ASSET_CODE_ALREADY_EXISTS"
                );
            }

            throw error;
        }
    }

    async findAll(
        filters: AssetFiltersDTO = {}
    ) {
        const {
            name,
            category,
            department,
            status,
            type,
        } = filters;

        if (department) {
            const departmentExists =
                await prisma.department.findUnique({
                    where: {
                        id: department,
                    },
                });

            if (!departmentExists) {
                throw new Error(
                    "DEPARTMENT_NOT_FOUND"
                );
            }
        }

        const where: Prisma.AssetWhereInput = {};

        if (name) {
            where.name = {
                contains: name,
                mode: "insensitive",
            };
        }

        if (category) {
            where.category = {
                contains: category,
                mode: "insensitive",
            };
        }

        if (department) {
            where.departmentId = department;
        }

        if (type) {
            where.type = {
                contains: type,
                mode: "insensitive",
            };
        }

        if (status) {
            where.status = status;
        } else {
            where.status = {
                not: "DISPOSED",
            };
        }

        return await prisma.asset.findMany({
            where,

            include: {
                department: {
                    select: {
                        id: true,
                        name: true,
                    },
                },

                responsible: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },

                createdBy: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },

            orderBy: {
                createdAt: "desc",
            },
        });
    }

    async findById(id: string) {
        const asset =
            await prisma.asset.findUnique({
                where: {
                    id,
                },

                include: {
                    department: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },

                    responsible: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                        },
                    },

                    createdBy: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                        },
                    },
                },
            });

        if (!asset) {
            throw new Error(
                "ASSET_NOT_FOUND"
            );
        }

        return asset;
    }

    async update(
        id: string,
        data: UpdateAssetDTO
    ) {
        const asset =
            await prisma.asset.findUnique({
                where: {
                    id,
                },
            });

        if (!asset) {
            throw new Error(
                "ASSET_NOT_FOUND"
            );
        }

        // Verifica departament
        if (data.departmentId) {
            const department =
                await prisma.department.findUnique({
                    where: {
                        id: data.departmentId,
                    },
                });

            if (!department) {
                throw new Error(
                    "DEPARTMENT_NOT_FOUND"
                );
            }
        }

        // Verifica responsável
        if (
            data.responsibleId !== undefined &&
            data.responsibleId !== null
        ) {
            const responsible =
                await prisma.user.findUnique({
                    where: {
                        id: data.responsibleId,
                    },
                });

            if (!responsible) {
                throw new Error(
                    "RESPONSIBLE_NOT_FOUND"
                );
            }
        }

        return await prisma.asset.update({
            where: {
                id,
            },

            data: {
                ...(data.name !== undefined && {
                    name: data.name,
                }),

                ...(data.description !==
                    undefined && {
                    description:
                        data.description,
                }),

                ...(data.category !==
                    undefined && {
                    category:
                        data.category,
                }),

                ...(data.departmentId !==
                    undefined && {
                    departmentId:
                        data.departmentId,
                }),

                ...(data.type !== undefined && {
                    type: data.type,
                }),

                ...(data.responsibleId !==
                    undefined && {
                    responsibleId:
                        data.responsibleId,
                }),

                ...(data.value !== undefined && {
                    value:
                        data.value === null
                            ? null
                            : new Prisma.Decimal(
                                data.value
                            ),
                }),

                ...(data.acquisitionDate !==
                    undefined && {
                    acquisitionDate:
                        data.acquisitionDate ===
                            null
                            ? null
                            : new Date(
                                data.acquisitionDate
                            ),
                }),

                ...(data.imageUrl !==
                    undefined && {
                    imageUrl:
                        data.imageUrl,
                }),

                ...(data.status !== undefined && {
                    status: data.status,
                }),
            },
        });
    }

    async delete(id: string) {
        const asset =
            await prisma.asset.findUnique({
                where: {
                    id,
                },
            });

        if (!asset) {
            throw new Error(
                "ASSET_NOT_FOUND"
            );
        }

        await prisma.asset.delete({
            where: {
                id,
            },
        });
    }
}