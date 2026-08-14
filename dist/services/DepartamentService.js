import { Prisma } from "../generated/prisma/client.js";
import prisma from "../lib/prisma.js";
export class DepartmentService {
    async create(data, createdById) {
        const existingDepartment = await prisma.department.findUnique({
            where: {
                name: data.name,
            },
        });
        if (existingDepartment) {
            throw new Error("DEPARTMENT_ALREADY_EXISTS");
        }
        const leader = await prisma.user.findUnique({
            where: {
                id: data.leaderId,
            },
        });
        if (!leader) {
            throw new Error("LEADER_NOT_FOUND");
        }
        try {
            const department = await prisma.department.create({
                data: {
                    name: data.name,
                    leaderId: data.leaderId,
                    createdById,
                    status: "ACTIVE",
                },
            });
            return department;
        }
        catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === "P2002") {
                throw new Error("DEPARTMENT_ALREADY_EXISTS");
            }
            throw error;
        }
    }
    async findAll() {
        return await prisma.department.findMany({
            include: {
                leader: {
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
                name: "asc",
            },
        });
    }
    async findById(id) {
        const department = await prisma.department.findUnique({
            where: {
                id,
            },
            include: {
                leader: {
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
                users: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        role: true,
                        status: true,
                    },
                },
            },
        });
        if (!department) {
            throw new Error("Departamento não encontrado");
        }
        return department;
    }
    async update(id, data) {
        const department = await prisma.department.findUnique({
            where: {
                id,
            },
        });
        if (!department) {
            throw new Error("Departamento não encontrado");
        }
        if (data.name !== undefined) {
            const existingDepartment = await prisma.department.findFirst({
                where: {
                    name: data.name,
                    id: {
                        not: id,
                    },
                },
            });
            if (existingDepartment) {
                throw new Error("DEPARTMENT_ALREADY_EXISTS");
            }
        }
        if (data.leaderId !== undefined) {
            const leader = await prisma.user.findUnique({
                where: {
                    id: data.leaderId,
                },
            });
            if (!leader) {
                throw new Error("LEADER_NOT_FOUND");
            }
        }
        return await prisma.department.update({
            where: {
                id,
            },
            data: {
                ...(data.name !== undefined && {
                    name: data.name,
                }),
                ...(data.leaderId !== undefined && {
                    leaderId: data.leaderId,
                }),
                ...(data.status !== undefined && {
                    status: data.status,
                }),
            },
        });
    }
    async delete(id) {
        const department = await prisma.department.findUnique({
            where: {
                id,
            },
        });
        if (!department) {
            throw new Error("Departamento não encontrado");
        }
        await prisma.department.delete({
            where: {
                id,
            },
        });
    }
}
//# sourceMappingURL=DepartamentService.js.map