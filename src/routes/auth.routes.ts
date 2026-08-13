import { Router } from "express";
import { validate } from "../middleware/validade.js";
import { forgotPasswordSchema, loginSchema, resetPasswordSchema } from "../schema/auth.schema.js";
import AuthController from "../controller/AuthController.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.post(
    "/login",
    validate({
        body: loginSchema,
    }),
    AuthController.login
);

router.post(
    "/forgot-password",
    validate({
        body: forgotPasswordSchema,
    }),
    AuthController.forgotPassword
);

router.post(
    "/reset-password",
    validate({
        body: resetPasswordSchema,
    }),
    AuthController.resetPassword
);

router.post(
    "/logout",
    authMiddleware,
    AuthController.logout
);

export default router;