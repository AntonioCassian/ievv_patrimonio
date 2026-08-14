import { Router } from "express";

import { AssetController } from "../controller/AssetController.js";

import { validate } from "../middleware/validade.js";

import {
    createAssetSchema,
    updateAssetSchema,
    assetIdSchema,
    assetFiltersSchema,
} from "../schema/asset.schema.js";

const router = Router();

const assetController =
    new AssetController();

router.post(
    "/patrimonios",
    validate({
        body: createAssetSchema,
    }),
    assetController.create
);

router.get(
    "/patrimonios",
    validate({
        query: assetFiltersSchema,
    }),
    assetController.findAll
);

router.get(
    "/patrimonios/:id",
    validate({
        params: assetIdSchema,
    }),
    assetController.findById
);

router.put(
    "/patrimonios/:id",
    validate({
        params: assetIdSchema,
        body: updateAssetSchema,
    }),
    assetController.update
);

router.delete(
    "/patrimonios/:id",
    validate({
        params: assetIdSchema,
    }),
    assetController.delete
);

export default router;