import { Router } from "express";
import { AssetOperationController, } from "../controller/AssetOperationController.js";
import { validate } from "../middleware/validade.js";
import { createAssetOperationSchema, updateAssetOperationSchema, assetOperationIdSchema, renewUsufructSchema, } from "../schema/asset-operation.schema.js";
const router = Router();
const controller = new AssetOperationController();
router.post("/patrimonio/usufruto-doacao", validate({
    body: createAssetOperationSchema,
}), controller.create);
router.get("/patrimonio/usufruto-doacao", controller.findAll);
router.get("/patrimonio/usufruto-doacao/:id", validate({
    params: assetOperationIdSchema,
}), controller.findById);
router.put("/patrimonio/usufruto-doacao/:id", validate({
    params: assetOperationIdSchema,
    body: updateAssetOperationSchema,
}), controller.update);
router.delete("/patrimonio/usufruto-doacao/:id", validate({
    params: assetOperationIdSchema,
}), controller.delete);
router.patch("/patrimonio/usufruto/:id/renovar", validate({
    params: assetOperationIdSchema,
    body: renewUsufructSchema,
}), controller.renew);
export default router;
//# sourceMappingURL=asset-operation.routes.js.map