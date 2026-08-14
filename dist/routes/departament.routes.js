import { Router } from "express";
import { DepartmentController } from "../controller/DepartmentController.js";
import { validate } from "../middleware/validade.js";
import { createDepartmentSchema, updateDepartmentSchema, departmentIdSchema, } from "../schema/department.schema.js";
const router = Router();
const departmentController = new DepartmentController();
router.post("/departments", validate({
    body: createDepartmentSchema,
}), departmentController.create);
router.get("/departments", departmentController.findAll);
router.get("/departments/:id", validate({
    params: departmentIdSchema,
}), departmentController.findById);
router.put("/departments/:id", validate({
    params: departmentIdSchema,
    body: updateDepartmentSchema,
}), departmentController.update);
router.delete("/departments/:id", validate({
    params: departmentIdSchema,
}), departmentController.delete);
export default router;
//# sourceMappingURL=departament.routes.js.map