import prisma from "../lib/prisma.js";

import type {
    CreateAssetOperationDTO,
    UpdateAssetOperationDTO,
    RenewUsufructDTO,
} from "../types/asset-operation.types.js";

export class AssetOperationService {

    // =========================================
    // CREATE
    // =========================================

    async create(
        data: CreateAssetOperationDTO,
        createdById: string
    ) {
        return await prisma.$transaction(async (tx) => {

            // =========================================
            // VERIFICAR PATRIMÔNIO
            // =========================================

            const asset = await tx.asset.findUnique({
                where: {
                    id: data.patrimonioId,
                },
            });

            if (!asset) {
                throw new Error("ASSET_NOT_FOUND");
            }

            // =========================================
            // VALIDAR QUANTIDADE
            // =========================================

            if (data.quantidade <= 0) {
                throw new Error("INVALID_QUANTITY");
            }

            if (
                data.quantidade >
                asset.quantityAvailable
            ) {
                throw new Error(
                    "INSUFFICIENT_QUANTITY"
                );
            }

            // =========================================
            // VERIFICAR USUÁRIO CRIADOR
            // =========================================

            const creator = await tx.user.findUnique({
                where: {
                    id: createdById,
                },
            });

            if (!creator) {
                throw new Error(
                    "CREATOR_NOT_FOUND"
                );
            }

            if (creator.status !== "ACTIVE") {
                throw new Error(
                    "CREATOR_INACTIVE"
                );
            }

            // =========================================
            // USUFRUTO
            // =========================================

            if (
                data.tipoOperacao === "USUFRUTO"
            ) {

                if (!data.responsavelId) {
                    throw new Error(
                        "RESPONSIBLE_REQUIRED"
                    );
                }

                if (!data.dataInicio) {
                    throw new Error(
                        "START_DATE_REQUIRED"
                    );
                }

                if (!data.dataFim) {
                    throw new Error(
                        "END_DATE_REQUIRED"
                    );
                }

                if (!data.finalidade) {
                    throw new Error(
                        "PURPOSE_REQUIRED"
                    );
                }

                // =========================================
                // RESPONSÁVEL
                // =========================================

                const responsible =
                    await tx.user.findUnique({
                        where: {
                            id: data.responsavelId,
                        },
                    });

                if (!responsible) {
                    throw new Error(
                        "RESPONSIBLE_NOT_FOUND"
                    );
                }

                if (
                    responsible.status !==
                    "ACTIVE"
                ) {
                    throw new Error(
                        "RESPONSIBLE_INACTIVE"
                    );
                }

                // =========================================
                // VALIDAR DATAS
                // =========================================

                const startDate =
                    new Date(data.dataInicio);

                const endDate =
                    new Date(data.dataFim);

                if (
                    isNaN(startDate.getTime()) ||
                    isNaN(endDate.getTime())
                ) {
                    throw new Error(
                        "INVALID_DATE"
                    );
                }

                if (endDate <= startDate) {
                    throw new Error(
                        "INVALID_DATE_RANGE"
                    );
                }

                // =========================================
                // CRIAR USUFRUTO
                // =========================================

                const operation =
                    await tx.assetOperation.create({
                        data: {
                            type: "USUFRUTO",

                            status: "ACTIVE",

                            assetId:
                                data.patrimonioId,

                            quantity:
                                data.quantidade,

                            operationDate:
                                new Date(
                                    data.dataOperacao
                                ),

                            observations:
                                data.observacoes ??
                                null,

                            responsibleId:
                                data.responsavelId,

                            startDate,

                            endDate,

                            purpose:
                                data.finalidade,

                            createdById,
                        },
                    });

                // =========================================
                // ATUALIZAR QUANTIDADE
                // =========================================

                const newQuantity =
                    asset.quantityAvailable -
                    data.quantidade;

                await tx.asset.update({
                    where: {
                        id: data.patrimonioId,
                    },

                    data: {
                        quantityAvailable:
                            newQuantity,

                        status:
                            newQuantity === 0
                                ? "IN_USE"
                                : asset.status,
                    },
                });

                // =========================================
                // HISTÓRICO
                // =========================================

                await tx.usufructHistory.create({
                    data: {
                        operationId:
                            operation.id,

                        type: "CREATED",

                        newEndDate:
                            endDate,

                        createdById,
                    },
                });

                return operation;
            }

            // =========================================
            // DOAÇÃO
            // =========================================

            if (
                data.tipoOperacao === "DOACAO"
            ) {

                if (!data.doador) {
                    throw new Error(
                        "DONOR_REQUIRED"
                    );
                }

                if (!data.dataDoacao) {
                    throw new Error(
                        "DONATION_DATE_REQUIRED"
                    );
                }

                // =========================================
                // CRIAR DOAÇÃO
                // =========================================

                const operation =
                    await tx.assetOperation.create({
                        data: {
                            type: "DOACAO",

                            status: "FINISHED",

                            assetId:
                                data.patrimonioId,

                            quantity:
                                data.quantidade,

                            operationDate:
                                new Date(
                                    data.dataOperacao
                                ),

                            observations:
                                data.observacoes ??
                                null,

                            donor:
                                data.doador,

                            donationDate:
                                new Date(
                                    data.dataDoacao
                                ),

                            document:
                                data.documento ??
                                null,

                            createdById,
                        },
                    });

                // =========================================
                // ATUALIZAR PATRIMÔNIO
                // =========================================

                const newQuantity =
                    asset.quantityAvailable -
                    data.quantidade;

                await tx.asset.update({
                    where: {
                        id: data.patrimonioId,
                    },

                    data: {
                        quantityAvailable:
                            newQuantity,

                        status:
                            newQuantity === 0
                                ? "DISPOSED"
                                : asset.status,
                    },
                });

                return operation;
            }

            throw new Error(
                "INVALID_OPERATION_TYPE"
            );
        });
    }

    // =========================================
    // FIND ALL
    // =========================================

    async findAll() {
        return await prisma.assetOperation.findMany({
            include: {
                asset: {
                    select: {
                        id: true,
                        code: true,
                        name: true,
                    },
                },

                responsible: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        status: true,
                    },
                },

                createdBy: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },

                histories: {
                    orderBy: {
                        createdAt: "desc",
                    },
                },
            },

            orderBy: {
                createdAt: "desc",
            },
        });
    }

    // =========================================
    // FIND BY ID
    // =========================================

    async findById(id: string) {
        const operation =
            await prisma.assetOperation.findUnique({
                where: {
                    id,
                },

                include: {
                    asset: true,

                    responsible: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            status: true,
                        },
                    },

                    createdBy: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                        },
                    },

                    histories: {
                        orderBy: {
                            createdAt: "desc",
                        },

                        include: {
                            createdBy: {
                                select: {
                                    id: true,
                                    name: true,
                                    email: true,
                                },
                            },
                        },
                    },
                },
            });

        if (!operation) {
            throw new Error(
                "OPERATION_NOT_FOUND"
            );
        }

        return operation;
    }

    // =========================================
    // UPDATE
    // =========================================

    async update(
        id: string,
        data: UpdateAssetOperationDTO
    ) {
        const operation =
            await prisma.assetOperation.findUnique({
                where: {
                    id,
                },
            });

        if (!operation) {
            throw new Error(
                "OPERATION_NOT_FOUND"
            );
        }

        // Doação não pode ser alterada
        if (
            operation.type === "DOACAO"
        ) {
            throw new Error(
                "DONATION_CANNOT_BE_UPDATED"
            );
        }

        // Usufruto precisa estar ativo
        if (
            operation.status !== "ACTIVE"
        ) {
            throw new Error(
                "OPERATION_NOT_ACTIVE"
            );
        }

        // =========================================
        // RESPONSÁVEL
        // =========================================

        if (
            data.responsavelId !== undefined
        ) {
            const responsible =
                await prisma.user.findUnique({
                    where: {
                        id:
                            data.responsavelId,
                    },
                });

            if (!responsible) {
                throw new Error(
                    "RESPONSIBLE_NOT_FOUND"
                );
            }

            if (
                responsible.status !==
                "ACTIVE"
            ) {
                throw new Error(
                    "RESPONSIBLE_INACTIVE"
                );
            }
        }

        // =========================================
        // ATUALIZAR
        // =========================================

        return await prisma.assetOperation.update({
            where: {
                id,
            },

            data: {
                ...(data.observacoes !==
                    undefined && {
                    observations:
                        data.observacoes,
                }),

                ...(data.finalidade !==
                    undefined && {
                    purpose:
                        data.finalidade,
                }),

                ...(data.responsavelId !==
                    undefined && {
                    responsibleId:
                        data.responsavelId,
                }),
            },
        });
    }

    // =========================================
    // DELETE
    // =========================================

    async delete(id: string) {
        return await prisma.$transaction(
            async (tx) => {

                const operation =
                    await tx.assetOperation.findUnique({
                        where: {
                            id,
                        },
                    });

                if (!operation) {
                    throw new Error(
                        "OPERATION_NOT_FOUND"
                    );
                }

                // Não permite apagar usufruto ativo
                if (
                    operation.type ===
                        "USUFRUTO" &&
                    operation.status ===
                        "ACTIVE"
                ) {
                    throw new Error(
                        "ACTIVE_OPERATION_CANNOT_BE_DELETED"
                    );
                }

                await tx.assetOperation.delete({
                    where: {
                        id,
                    },
                });
            }
        );
    }

    // =========================================
    // RENOVAR USUFRUTO
    // =========================================

    async renewUsufruct(
        id: string,
        data: RenewUsufructDTO,
        createdById: string
    ) {
        return await prisma.$transaction(
            async (tx) => {

                // =========================================
                // BUSCAR OPERAÇÃO
                // =========================================

                const operation =
                    await tx.assetOperation.findUnique({
                        where: {
                            id,
                        },
                    });

                if (!operation) {
                    throw new Error(
                        "OPERATION_NOT_FOUND"
                    );
                }

                // =========================================
                // IMPEDIR RENOVAÇÃO DE DOAÇÃO
                // =========================================

                if (
                    operation.type ===
                    "DOACAO"
                ) {
                    throw new Error(
                        "DONATION_CANNOT_BE_RENEWED"
                    );
                }

                // =========================================
                // VERIFICAR STATUS
                // =========================================

                if (
                    operation.status !==
                    "ACTIVE"
                ) {
                    throw new Error(
                        "USUFRUCT_NOT_ACTIVE"
                    );
                }

                // =========================================
                // VERIFICAR DATA ATUAL
                // =========================================

                if (!operation.endDate) {
                    throw new Error(
                        "END_DATE_NOT_FOUND"
                    );
                }

                const newEndDate =
                    new Date(
                        data.novaDataTermino
                    );

                if (
                    isNaN(
                        newEndDate.getTime()
                    )
                ) {
                    throw new Error(
                        "INVALID_DATE"
                    );
                }

                // Nova data deve ser posterior
                if (
                    newEndDate <=
                    operation.endDate
                ) {
                    throw new Error(
                        "INVALID_RENEWAL_DATE"
                    );
                }

                // =========================================
                // USUÁRIO RESPONSÁVEL
                // =========================================

                const user =
                    await tx.user.findUnique({
                        where: {
                            id: createdById,
                        },
                    });

                if (!user) {
                    throw new Error(
                        "CREATOR_NOT_FOUND"
                    );
                }

                if (
                    user.status !==
                    "ACTIVE"
                ) {
                    throw new Error(
                        "CREATOR_INACTIVE"
                    );
                }

                // =========================================
                // GUARDAR DATA ANTERIOR
                // =========================================

                const previousEndDate =
                    operation.endDate;

                // =========================================
                // ATUALIZAR USUFRUTO
                // =========================================

                await tx.assetOperation.update({
                    where: {
                        id,
                    },

                    data: {
                        endDate:
                            newEndDate,

                        status:
                            "ACTIVE",
                    },
                });

                // =========================================
                // REGISTRAR HISTÓRICO
                // =========================================

                await tx.usufructHistory.create({
                    data: {
                        operationId:
                            id,

                        type: "RENEWED",

                        previousEndDate,

                        newEndDate,

                        justification:
                            data.justificativa,

                        createdById,
                    },
                });

                // =========================================
                // RETORNAR ATUALIZADO
                // =========================================

                return await tx.assetOperation.findUnique({
                    where: {
                        id,
                    },

                    include: {
                        asset: true,

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

                        histories: {
                            orderBy: {
                                createdAt:
                                    "desc",
                            },

                            include: {
                                createdBy: {
                                    select: {
                                        id: true,
                                        name: true,
                                        email: true,
                                    },
                                },
                            },
                        },
                    },
                });
            }
        );
    }
}