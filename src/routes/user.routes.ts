import { Router } from "express";
import { UserController } from "../controller/UserController.js";
import { validate } from "../middleware/validade.js";
import { createUserSchema, updateUserSchema, userIdSchema } from "../schema/user.schema.js";

const router = Router();

const userController = new UserController();

router.post(
    "/users",
    validate({
        body: createUserSchema,
    }),
    userController.create
);

router.get(
    "/users",
    userController.findAll
);

router.get(
    "/users/:id",
    validate({
        params: userIdSchema,
    }),
    userController.findById
);

router.put(
    "/users/:id",
    validate({
        params: userIdSchema,
        body: updateUserSchema,
    }),
    userController.update
);

router.delete(
    "/users/:id",
    validate({
        params: userIdSchema,
    }),
    userController.delete
);

export default router;