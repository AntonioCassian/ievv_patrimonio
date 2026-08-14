import { Router } from "express";
import { validate } from "../middleware/validade.js";
import { forgotPasswordSchema, loginSchema, resetPasswordSchema } from "../schema/auth.schema.js";
import AuthController from "../controller/AuthController.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const router = Router();
router.post("/auth/login", validate({
    body: loginSchema,
}), AuthController.login);
router.post("/auth/forgot-password", validate({
    body: forgotPasswordSchema,
}), AuthController.forgotPassword);
router.post("/auth/reset-password", validate({
    body: resetPasswordSchema,
}), AuthController.resetPassword);
router.post("/auth/logout", authMiddleware, AuthController.logout);
router.get("/me", authMiddleware, AuthController.me);
export default router;
//# sourceMappingURL=auth.routes.js.map