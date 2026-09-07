import { Router } from "express";

import {
    validate,
} from "../middleware/validade.js";

import {
    NotificationController,
} from "../controller/NotificationsController.js";

import {
    updateNotificationSettingsSchema,
} from "../schema/notification.schema.js";

const router = Router();

const notificationController =
    new NotificationController();

// ==========================================
// NOTIFICAÇÕES
// ==========================================

// GET /notificacoes
// Retorna as notificações do usuário autenticado
router.get(
    "/notificacoes",
    notificationController.findAll
);

// ==========================================
// CONFIGURAÇÕES
// ==========================================

// GET /notificacoes/configuracoes
// Retorna as configurações do usuário autenticado
router.get(
    "/notificacoes/configuracoes",
    notificationController.getSettings
);

// PUT /notificacoes/configuracoes
// Atualiza as configurações do usuário autenticado
router.put(
    "/notificacoes/configuracoes",
    validate({
        body: updateNotificationSettingsSchema,
    }),
    notificationController.updateSettings
);

// ==========================================
// DISPENSAR NOTIFICAÇÃO
// ==========================================

// DELETE /notificacoes/:id
router.delete(
    "/notificacoes/:id",
    notificationController.delete
);

// ==========================================
// DISPENSAR TODAS
// ==========================================

// DELETE /notificacoes
router.delete(
    "/notificacoes",
    notificationController.deleteAll
);

export default router;
