import prisma from "../lib/prisma.js";
import type { UpdateNotificationSettingsDTO } from "../schema/notification.schema.js";

class NotificationService {

    // ==========================================
    // CONFIGURAÇÕES
    // ==========================================

    async getSettings(userId: string) {
        const user =
            await prisma.user.findUnique({
                where: {
                    id: userId,
                },
            });

        if (!user) {
            throw new Error(
                "USER_NOT_FOUND"
            );
        }

        const settings =
            await prisma.notificationSettings.findUnique({
                where: {
                    userId,
                },
            });

        if (!settings) {
            return prisma.notificationSettings.create({
                data: {
                    userId,
                    notificacaoEmprestimo: true,
                    notificacaoDevolucao: true,
                    notificacaoUsufruto: true,
                    notificacaoDoacao: true,
                    notificacaoPatrimonio: true,
                },
            });
        }

        return settings;
    }

    async updateSettings(
        userId: string,
        data: UpdateNotificationSettingsDTO
    ) {
        const user =
            await prisma.user.findUnique({
                where: {
                    id: userId,
                },
            });

        if (!user) {
            throw new Error(
                "USER_NOT_FOUND"
            );
        }

        return prisma.notificationSettings.upsert({
            where: {
                userId,
            },

            create: {
                userId,

                notificacaoEmprestimo:
                    data.notificacaoEmprestimo ??
                    true,

                notificacaoDevolucao:
                    data.notificacaoDevolucao ??
                    true,

                notificacaoUsufruto:
                    data.notificacaoUsufruto ??
                    true,

                notificacaoDoacao:
                    data.notificacaoDoacao ??
                    true,

                notificacaoPatrimonio:
                    data.notificacaoPatrimonio ??
                    true,
            },

            update: {
                ...(data.notificacaoEmprestimo !==
                    undefined && {
                    notificacaoEmprestimo:
                        data.notificacaoEmprestimo,
                }),

                ...(data.notificacaoDevolucao !==
                    undefined && {
                    notificacaoDevolucao:
                        data.notificacaoDevolucao,
                }),

                ...(data.notificacaoUsufruto !==
                    undefined && {
                    notificacaoUsufruto:
                        data.notificacaoUsufruto,
                }),

                ...(data.notificacaoDoacao !==
                    undefined && {
                    notificacaoDoacao:
                        data.notificacaoDoacao,
                }),

                ...(data.notificacaoPatrimonio !==
                    undefined && {
                    notificacaoPatrimonio:
                        data.notificacaoPatrimonio,
                }),
            },
        });
    }

    // ==========================================
    // NOTIFICAÇÕES DINÂMICAS
    // ==========================================

    async findAll(userId: string) {

        const settings =
            await this.getSettings(userId);

        const notifications = [];

        // ==========================================
        // PATRIMÔNIO
        // ==========================================

        if (
            settings.notificacaoPatrimonio
        ) {
            const assetsMaintenance =
                await prisma.asset.count({
                    where: {
                        status: "MAINTENANCE",
                    },
                });

            if (
                assetsMaintenance > 0
            ) {
                notifications.push({
                    id: "assets-maintenance",
                    type: "info",
                    title:
                        "Patrimônio em manutenção",
                    message:
                        `${assetsMaintenance} bem(ns) em manutenção.`,
                    link: "/patrimonio",
                });
            }
        }

        // ==========================================
        // EMPRÉSTIMOS
        // ==========================================

        if (
            settings.notificacaoEmprestimo
        ) {
            const activeLoans =
                await prisma.loan.count({
                    where: {
                        status: "ACTIVE",
                    },
                });

            if (activeLoans > 0) {
                notifications.push({
                    id: "active-loans",
                    type: "info",
                    title:
                        "Empréstimos ativos",
                    message:
                        `${activeLoans} empréstimo(s) ativo(s).`,
                    link: "/emprestimos",
                });
            }
        }

        // ==========================================
        // DEVOLUÇÕES
        // ==========================================

        if (
            settings.notificacaoDevolucao
        ) {
            const today =
                new Date();

            const overdueLoans =
                await prisma.loan.count({
                    where: {
                        status: "ACTIVE",
                        expectedReturnDate: {
                            lt: today,
                        },
                    },
                });

            if (
                overdueLoans > 0
            ) {
                notifications.push({
                    id: "overdue-loans",
                    type: "danger",
                    title:
                        "Empréstimos em atraso",
                    message:
                        `${overdueLoans} empréstimo(s) estão com a devolução atrasada.`,
                    link: "/emprestimos",
                });
            }
        }

        // ==========================================
        // USUFRUTO
        // ==========================================

        if (
            settings.notificacaoUsufruto
        ) {
            const activeUsufructs =
                await prisma.assetOperation.count({
                    where: {
                        type: "USUFRUTO",
                        status: "ACTIVE",
                    },
                });

            if (
                activeUsufructs > 0
            ) {
                notifications.push({
                    id: "active-usufructs",
                    type: "info",
                    title:
                        "Usufrutos ativos",
                    message:
                        `${activeUsufructs} usufruto(s) ativo(s).`,
                    link: "/usufrutos",
                });
            }
        }

        // ==========================================
        // DOAÇÕES
        // ==========================================

        if (
            settings.notificacaoDoacao
        ) {
            const donations =
                await prisma.assetOperation.count({
                    where: {
                        type: "DOACAO",
                        status: "ACTIVE",
                    },
                });

            if (
                donations > 0
            ) {
                notifications.push({
                    id: "active-donations",
                    type: "info",
                    title:
                        "Doações registradas",
                    message:
                        `${donations} doação(ões) registrada(s).`,
                    link: "/doacoes",
                });
            }
        }

        return notifications;
    }

    // ==========================================
    // APAGAR UMA
    // ==========================================

    async delete(
        id: string
    ) {
        return {
            success: true,
            id,
            message:
                "Notificação dispensada.",
        };
    }

    // ==========================================
    // APAGAR TODAS
    // ==========================================

    async deleteAll() {
        return {
            success: true,
            message:
                "Todas as notificações foram dispensadas.",
        };
    }
}

export default new NotificationService();
