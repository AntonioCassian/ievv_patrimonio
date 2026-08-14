import prisma from "../lib/prisma.js";
export class LoanService {
    async create(data, createdById) {
        const loan = await prisma.$transaction(async (tx) => {
            const asset = await tx.asset.findUnique({
                where: {
                    id: data.assetId,
                },
            });
            if (!asset) {
                throw new Error("ASSET_NOT_FOUND");
            }
            if (asset.status !==
                "AVAILABLE") {
                throw new Error("ASSET_NOT_AVAILABLE");
            }
            const responsible = await tx.user.findUnique({
                where: {
                    id: data.responsibleId,
                },
            });
            if (!responsible) {
                throw new Error("RESPONSIBLE_NOT_FOUND");
            }
            if (responsible.status !==
                "ACTIVE") {
                throw new Error("RESPONSIBLE_INACTIVE");
            }
            const createdBy = await tx.user.findUnique({
                where: {
                    id: createdById,
                },
            });
            if (!createdBy) {
                throw new Error("CREATOR_NOT_FOUND");
            }
            const newLoan = await tx.loan.create({
                data: {
                    assetId: data.assetId,
                    responsibleId: data.responsibleId,
                    createdById,
                    purpose: data.purpose,
                    withdrawalDate: data.withdrawalDate,
                    expectedReturnDate: data.expectedReturnDate,
                    status: "ACTIVE",
                },
            });
            await tx.asset.update({
                where: {
                    id: data.assetId,
                },
                data: {
                    status: "IN_USE",
                },
            });
            return newLoan;
        });
        return this.findById(loan.id);
    }
    async findAll() {
        return await prisma.loan.findMany({
            include: {
                asset: {
                    select: {
                        id: true,
                        code: true,
                        name: true,
                        category: true,
                        type: true,
                        status: true,
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
    async findById(id) {
        const loan = await prisma.loan.findUnique({
            where: {
                id,
            },
            include: {
                asset: {
                    select: {
                        id: true,
                        code: true,
                        name: true,
                        category: true,
                        type: true,
                        status: true,
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
            },
        });
        if (!loan) {
            throw new Error("LOAN_NOT_FOUND");
        }
        return loan;
    }
    async update(id, data) {
        const loan = await prisma.loan.findUnique({
            where: {
                id,
            },
        });
        if (!loan) {
            throw new Error("LOAN_NOT_FOUND");
        }
        if (loan.status !== "ACTIVE") {
            throw new Error("LOAN_NOT_ACTIVE");
        }
        if (data.responsibleId) {
            const responsible = await prisma.user.findUnique({
                where: {
                    id: data.responsibleId,
                },
            });
            if (!responsible) {
                throw new Error("RESPONSIBLE_NOT_FOUND");
            }
            if (responsible.status !==
                "ACTIVE") {
                throw new Error("RESPONSIBLE_INACTIVE");
            }
        }
        const withdrawalDate = data.withdrawalDate ??
            loan.withdrawalDate;
        const expectedReturnDate = data.expectedReturnDate ??
            loan.expectedReturnDate;
        if (expectedReturnDate <
            withdrawalDate) {
            throw new Error("INVALID_DATES");
        }
        await prisma.loan.update({
            where: {
                id,
            },
            data: {
                ...(data.purpose !==
                    undefined && {
                    purpose: data.purpose,
                }),
                ...(data.responsibleId !==
                    undefined && {
                    responsibleId: data.responsibleId,
                }),
                ...(data.withdrawalDate !==
                    undefined && {
                    withdrawalDate: data.withdrawalDate,
                }),
                ...(data.expectedReturnDate !==
                    undefined && {
                    expectedReturnDate: data.expectedReturnDate,
                }),
            },
        });
        return this.findById(id);
    }
    async delete(id) {
        const loan = await prisma.loan.findUnique({
            where: {
                id,
            },
        });
        if (!loan) {
            throw new Error("LOAN_NOT_FOUND");
        }
        if (loan.status === "ACTIVE") {
            throw new Error("ACTIVE_LOAN_CANNOT_BE_DELETED");
        }
        await prisma.loan.delete({
            where: {
                id,
            },
        });
    }
    async returnLoan(id) {
        const result = await prisma.$transaction(async (tx) => {
            const loan = await tx.loan.findUnique({
                where: {
                    id,
                },
                include: {
                    asset: true,
                },
            });
            if (!loan) {
                throw new Error("LOAN_NOT_FOUND");
            }
            if (loan.status !==
                "ACTIVE") {
                throw new Error("LOAN_ALREADY_RETURNED");
            }
            if (loan.asset.status !==
                "IN_USE") {
                throw new Error("ASSET_NOT_IN_USE");
            }
            const updatedLoan = await tx.loan.update({
                where: {
                    id,
                },
                data: {
                    status: "RETURNED",
                    returnedAt: new Date(),
                },
            });
            await tx.asset.update({
                where: {
                    id: loan.assetId,
                },
                data: {
                    status: "AVAILABLE",
                },
            });
            return updatedLoan;
        });
        return this.findById(result.id);
    }
}
//# sourceMappingURL=LoanService.js.map