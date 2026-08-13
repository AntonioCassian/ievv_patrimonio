
import type { Request, Response, NextFunction } from "express";
import { z } from "zod";

type ValidationSchemas = {
  body?: z.ZodType;
  params?: z.ZodType;
  query?: z.ZodType;
};

export const validate = (schemas: ValidationSchemas) => {
  return (req: Request, res: Response, next: NextFunction) => {
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
    } catch (error) {
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
