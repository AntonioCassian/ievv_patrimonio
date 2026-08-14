import { Router } from "express";

import {
    LoanController,
} from "../controller/LoanController.js";

import {
    validate,
} from "../middleware/validade.js";

import {
    createLoanSchema,
    updateLoanSchema,
    loanIdSchema,
} from "../schema/loan.schema.js";

const router = Router();

const loanController =
    new LoanController();

router.post(
    "/emprestimos",
    validate({
        body: createLoanSchema,
    }),
    loanController.create
);

router.get(
    "/emprestimos",
    loanController.findAll
);

router.get(
    "/emprestimos/:id",
    validate({
        params: loanIdSchema,
    }),
    loanController.findById
);

router.put(
    "/emprestimos/:id",
    validate({
        params: loanIdSchema,
        body: updateLoanSchema,
    }),
    loanController.update
);

router.delete(
    "/emprestimos/:id",
    validate({
        params: loanIdSchema,
    }),
    loanController.delete
);

// Devolução
router.post(
    "/emprestimos/:id/devolucao",
    validate({
        params: loanIdSchema,
    }),
    loanController.return
);

export default router;