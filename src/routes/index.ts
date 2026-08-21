import { Router } from "express";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import dashboardRoutes from "./dashboard.routes.js";
import departmentRoutes from "./departament.routes.js";
import loanRoutes from "./loan.routes.js";
import assetRoutes from "./asset.routes.js";
import assetOperationRoutes from "./asset-operation.routes.js";
import chutchSettingsRoutes from "./church-settings.routes.js";

const router = Router();

router.use("/api", authRoutes);
router.use("/api", dashboardRoutes);
router.use("/api", departmentRoutes);
router.use("/api", userRoutes);
router.use("/api", loanRoutes);
router.use("/api", assetRoutes);
router.use("/api", assetOperationRoutes);
router.use("/api/church-settings", chutchSettingsRoutes);

export default router;