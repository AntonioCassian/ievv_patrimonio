import { z } from "zod";
export const validate = (schemas) => {
    return (req, res, next) => {
        try {
            if (schemas.body) {
                schemas.body.parse(req.body);
            }
            if (schemas.params) {
                schemas.params.parse(req.params);
            }
            if (schemas.query) {
                schemas.query.parse(req.query);
            }
            next();
        }
        catch (error) {
            if (error instanceof z.ZodError) {
                return res.status(400).json({
                    message: "Dados inválidos",
                    errors: error.flatten().fieldErrors,
                });
            }
            console.error(error);
            return res.status(500).json({
                message: "Erro na validação dos dados",
            });
        }
    };
};
//# sourceMappingURL=validade.js.map