
import type z from "zod";
import type { churchSettingsIdSchema, createChurchSettingsSchema, updateChurchSettingsSchema } from "../schema/church-settings.schema.js";

export type CreateChurchSettingsInput = z.infer<
  typeof createChurchSettingsSchema
>;

export type UpdateChurchSettingsInput = z.infer<
  typeof updateChurchSettingsSchema
>;

export type ChurchSettingsIdInput = z.infer<
  typeof churchSettingsIdSchema
>;