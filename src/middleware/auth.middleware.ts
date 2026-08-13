import type { NextFunction, Request, Response } from "express";
import type { JwtPayload } from "../types/auth.types.js";

import jwt from "jsonwebtoken";

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.cookies.access_token;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Token não informado",
        });
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as JwtPayload;

        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Token inválido",
        });
    }
};