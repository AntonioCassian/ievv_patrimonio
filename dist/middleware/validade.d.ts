import type { Request, Response, NextFunction } from "express";
import { z } from "zod";
type ValidationSchemas = {
    body?: z.ZodType;
    params?: z.ZodType;
    query?: z.ZodType;
};
export declare const validate: (schemas: ValidationSchemas) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export {};
//# sourceMappingURL=validade.d.ts.map