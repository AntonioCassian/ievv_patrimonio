
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";

import type { ForgotPasswordData, LoginData, ResetPasswordData } from "../types/auth.types.js";
import prisma from "../lib/prisma.js";

class AuthService {
    async login({ email, password }: LoginData) {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
            include: {
                department: true,
            },
        });

        if (!user) {
            throw new Error("E-mail ou senha inválidos.");
        }

        if (user.status !== "ACTIVE") {
            throw new Error("Usuário desativado.");
        }

        if (!user.password) {
            throw new Error(
                "Este usuário não possui uma senha cadastrada."
            );
        }

        const passwordValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordValid) {
            throw new Error("E-mail ou senha inválidos.");
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
            },
            process.env.JWT_SECRET as string,
            {
                expiresIn: "1d",
            }
        );

        // await prisma.user.update({
        //     where: {
        //         id: user.id,
        //     },
        //     data: {
        //         lastLoginAt: new Date(),
        //     },
        // });

        return {
            token,

            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role,
                status: user.status,
                temporaryPassword: user.temporaryPassword,
                departmentId: user.departmentId,
                department: user.department,
                lastLoginAt: new Date(),
            },

            permissions: [],
        };
    }

        // =========================
    // ESQUECI A SENHA
    // =========================

    async forgotPassword({
        email,
    }: ForgotPasswordData) {
        const genericMessage =
            "Se o e-mail estiver cadastrado, você receberá um código de recuperação.";

        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        // Não revela se o e-mail existe
        if (!user) {
            return {
                message: genericMessage,
            };
        }

        // Usuário inativo também recebe resposta genérica
        if (user.status !== "ACTIVE") {
            return {
                message: genericMessage,
            };
        }

        // Invalida códigos anteriores
        await prisma.passwordReset.updateMany({
            where: {
                userId: user.id,
                usedAt: null,
            },
            data: {
                usedAt: new Date(),
            },
        });

        // Código de 6 dígitos
        const code = crypto
            .randomInt(100000, 1000000)
            .toString();

        // Hash do código que será armazenado
        const tokenHash = crypto
            .createHash("sha256")
            .update(code)
            .digest("hex");

        // Expira em 15 minutos
        const expiresAt = new Date(
            Date.now() + 15 * 60 * 1000
        );

        await prisma.passwordReset.create({
            data: {
                userId: user.id,
                tokenHash,
                expiresAt,
            },
        });

        // TODO:
        // Enviar "code" por e-mail.
        //
        // Exemplo:
        //
        // await emailService.sendPasswordReset(
        //     user.email,
        //     user.name,
        //     code
        // );

        console.log(
            `[PASSWORD RESET] ${user.email}: ${code}`
        );

        return {
            message: genericMessage,
        };
    }

    // =========================
    // REDEFINIR SENHA
    // =========================

    async resetPassword({
        token,
        password,
    }: ResetPasswordData) {
        const tokenHash = crypto
            .createHash("sha256")
            .update(token)
            .digest("hex");

        const reset = await prisma.passwordReset.findFirst({
            where: {
                tokenHash,
                usedAt: null,
            },
            include: {
                user: true,
            },
        });

        if (!reset) {
            throw new Error(
                "Código de recuperação inválido."
            );
        }

        if (reset.expiresAt < new Date()) {
            throw new Error(
                "Código de recuperação expirado."
            );
        }

        if (reset.user.status !== "ACTIVE") {
            throw new Error(
                "Usuário desativado."
            );
        }

        const passwordHash = await bcrypt.hash(
            password,
            10
        );

        await prisma.$transaction([
            prisma.user.update({
                where: {
                    id: reset.userId,
                },
                data: {
                    password: passwordHash,
                    temporaryPassword: false,
                },
            }),

            prisma.passwordReset.update({
                where: {
                    id: reset.id,
                },
                data: {
                    usedAt: new Date(),
                },
            }),
        ]);

        return {
            message: "Senha redefinida com sucesso.",
        };
    }

}

export default new AuthService();
