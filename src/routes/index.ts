import { Router } from "express";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import departmentRoutes from "./departament.routes.js";
import assetRoutes from "./asset.routes.js";

const router = Router();

router.use("/api/auth", authRoutes);
router.use("/api", departmentRoutes);
router.use("/api", userRoutes);
router.use("/api", assetRoutes);

export default router;