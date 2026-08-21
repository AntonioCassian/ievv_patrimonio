import { Router } from "express";

import { ChurchSettingsController } from "../controller/ChurchSettingsController.js";

import { validate } from "../middleware/validade.js";

import {
  createChurchSettingsSchema,
  updateChurchSettingsSchema,
  churchSettingsIdSchema,
} from "../schema/church-settings.schema.js";

const router = Router();

const churchSettingsController =
  new ChurchSettingsController();

router.post(
  "/church-settings",
  validate({
    body: createChurchSettingsSchema,
  }),
  churchSettingsController.create
);

router.get(
  "/church-settings",
  churchSettingsController.find
);

router.put(
  "/church-settings/:id",
  validate({
    params: churchSettingsIdSchema,
    body: updateChurchSettingsSchema,
  }),
  churchSettingsController.update
);

router.delete(
  "/church-settings/:id",
  validate({
    params: churchSettingsIdSchema,
  }),
  churchSettingsController.delete
);

export default router;
