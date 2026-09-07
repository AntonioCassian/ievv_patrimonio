
import { AssetStatus, LoanStatus } from "../generated/prisma/enums.js";
import prisma from "../lib/prisma.js";

import type {
    CreateLoanDTO,
    UpdateLoanDTO,
    ReturnLoanDTO,
} from "../schema/loan.schema.js";

export class LoanService {
    // =========================
    // CREATE
    // =========================

    async create(
        data: CreateLoanDTO,
        createdById: string
    ) {
        const asset =
            await prisma.asset.findUnique({
                where: {
                    id: data.assetId,
                },
            });

        if (!asset) {
            throw new Error(
                "ASSET_NOT_FOUND"
            );
        }

        if (
            asset.status !==
            AssetStatus.AVAILABLE
        ) {
            throw new Error(
                "ASSET_NOT_AVAILABLE"
            );
        }

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

        if (
            responsible.status !== "ACTIVE"
        ) {
            throw new Error(
                "RESPONSIBLE_INACTIVE"
            );
        }

        const creator =
            await prisma.user.findUnique({
                where: {
                    id: createdById,
                },
            });

        if (!creator) {
            throw new Error(
                "CREATOR_NOT_FOUND"
            );
        }

        return await prisma.$transaction(
            async (tx) => {
                const loan =
                    await tx.loan.create({
                        data: {
                            assetId:
                                data.assetId,

                            responsibleId:
                                data.responsibleId,

                            createdById,

                            purpose:
                                data.purpose,

                            withdrawalDate:
                                data.withdrawalDate,

                            expectedReturnDate:
                                data.expectedReturnDate,

                            status:
                                LoanStatus.ACTIVE,
                        },

                        include: {
                            asset: true,
                            responsible: true,
                            createdBy: true,
                        },
                    });

                await tx.asset.update({
                    where: {
                        id: data.assetId,
                    },
                    data: {
                        status:
                            AssetStatus.IN_USE,
                    },
                });

                return loan;
            }
        );
    }

    // =========================
    // FIND ALL
    // =========================

    async findAll() {
        return await prisma.loan.findMany({
            orderBy: {
                createdAt: "desc",
            },

            include: {
                asset: true,
                responsible: true,
                createdBy: true,
                returnedBy: true,
            },
        });
    }

    // =========================
    // FIND BY ID
    // =========================

    async findById(id: string) {
        const loan =
            await prisma.loan.findUnique({
                where: {
                    id,
                },

                include: {
                    asset: true,
                    responsible: true,
                    createdBy: true,
                    returnedBy: true,
                },
            });

        if (!loan) {
            throw new Error(
                "LOAN_NOT_FOUND"
            );
        }

        return loan;
    }

    // =========================
    // UPDATE
    // =========================

    async update(
        id: string,
        data: UpdateLoanDTO
    ) {
        const loan =
            await prisma.loan.findUnique({
                where: {
                    id,
                },
            });

        if (!loan) {
            throw new Error(
                "LOAN_NOT_FOUND"
            );
        }

        if (
            loan.status !==
            LoanStatus.ACTIVE
        ) {
            throw new Error(
                "LOAN_NOT_ACTIVE"
            );
        }

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

            if (
                responsible.status !==
                "ACTIVE"
            ) {
                throw new Error(
                    "RESPONSIBLE_INACTIVE"
                );
            }
        }

        if (
            data.withdrawalDate &&
            data.expectedReturnDate &&
            data.expectedReturnDate <
            data.withdrawalDate
        ) {
            throw new Error(
                "INVALID_DATES"
            );
        }

        return await prisma.loan.update({
            where: {
                id,
            },

            data: {
                ...(data.purpose !==
                    undefined && {
                    purpose:
                        data.purpose,
                }),

                ...(data.responsibleId !==
                    undefined && {
                    responsibleId:
                        data.responsibleId,
                }),

                ...(data.withdrawalDate !==
                    undefined && {
                    withdrawalDate:
                        data.withdrawalDate,
                }),

                ...(data.expectedReturnDate !==
                    undefined && {
                    expectedReturnDate:
                        data.expectedReturnDate,
                }),
            },

            include: {
                asset: true,
                responsible: true,
                createdBy: true,
                returnedBy: true,
            },
        });
    }

    // =========================
    // DELETE
    // =========================

    async delete(id: string) {
        const loan =
            await prisma.loan.findUnique({
                where: {
                    id,
                },
            });

        if (!loan) {
            throw new Error(
                "LOAN_NOT_FOUND"
            );
        }

        /*
         * Empréstimos não devem ser removidos,
         * pois fazem parte do histórico.
         */
        throw new Error(
            "LOAN_CANNOT_BE_DELETED"
        );
    }

    // =========================
    // RETURN
    // =========================

    async returnLoan(
        id: string,
        returnedById: string,
        data: ReturnLoanDTO
    ) {
        const loan =
            await prisma.loan.findUnique({
                where: {
                    id,
                },

                include: {
                    asset: true,
                },
            });

        if (!loan) {
            throw new Error(
                "LOAN_NOT_FOUND"
            );
        }

        if (
            loan.status ===
            LoanStatus.RETURNED
        ) {
            throw new Error(
                "LOAN_ALREADY_RETURNED"
            );
        }

        if (
            loan.asset.status !==
            AssetStatus.IN_USE
        ) {
            throw new Error(
                "ASSET_NOT_IN_USE"
            );
        }

        const returner =
            await prisma.user.findUnique({
                where: {
                    id: returnedById,
                },
            });

        if (!returner) {
            throw new Error(
                "RETURNER_NOT_FOUND"
            );
        }

        return await prisma.$transaction(
            async (tx) => {
                const returnedLoan =
                    await tx.loan.update({
                        where: {
                            id,
                        },

                        data: {
                            status:
                                LoanStatus.RETURNED,

                            returnedAt:
                                new Date(),

                            returnedById,

                            returnCondition:
                                data.returnCondition,

                            returnNotes:
                                data.returnNotes,
                        },

                        include: {
                            asset: true,
                            responsible: true,
                            createdBy: true,
                            returnedBy: true,
                        },
                    });

                await tx.asset.update({
                    where: {
                        id: loan.assetId,
                    },

                    data: {
                        status:
                            AssetStatus.AVAILABLE,
                    },
                });

                return returnedLoan;
            }
        );
    }

    // =========================
    // HISTORY
    // =========================

    async findHistory(
        patrimonioId?: string
    ) {
        if (patrimonioId) {
            const asset =
                await prisma.asset.findUnique({
                    where: {
                        id: patrimonioId,
                    },
                });

            if (!asset) {
                throw new Error(
                    "ASSET_NOT_FOUND"
                );
            }
        }

        return await prisma.loan.findMany({
            where: {
                status: LoanStatus.RETURNED,

                ...(patrimonioId && {
                    assetId: patrimonioId,
                }),
            },

            orderBy: {
                returnedAt: "desc",
            },

            include: {
                asset: true,

                responsible: true,

                createdBy: true,

                returnedBy: true,
            },
        });
    }

    // =========================
    // HISTORY BY ID
    // =========================

    async findHistoryById(id: string) {
        const loan =
            await prisma.loan.findFirst({
                where: {
                    id,
                    status: LoanStatus.RETURNED,
                },

                include: {
                    asset: true,

                    responsible: true,

                    createdBy: true,

                    returnedBy: true,
                },
            });

        if (!loan) {
            throw new Error(
                "LOAN_HISTORY_NOT_FOUND"
            );
        }

        return loan;
    }
}