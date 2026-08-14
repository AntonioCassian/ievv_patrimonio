import { Router } from "express";

import { DashboardController } from "../controller/DashboardController.js";

const router = Router();

const dashboardController = new DashboardController();

router.get(
    "/dashboard",
    dashboardController.getDashboard
);

export default router;