import { z } from "zod";

export const createAssetSchema = z
    .object({
        name: z
            .string()
            .trim()
            .min(
                1,
                "O nome do patrimônio é obrigatório"
            )
            .max(
                150,
                "O nome do patrimônio deve ter no máximo 150 caracteres"
            ),

        description: z
            .string()
            .trim()
            .max(
                1000,
                "A descrição deve ter no máximo 1000 caracteres"
            )
            .optional(),

        category: z.enum([
            "UTENSILIO",
            "COZINHA",
            "ACESSORIO",
            "MOVEIS",
            "DIVERSOS",
            "DECORACAO",
            "SOM",
            "ELETRODOMESTICO",
            "INFORMATICA",
            "ILUMINACAO",
            "LIVROS",
            "HIDRAULICOS",
            "FOTOGRAFIA",
        ], {
            message: "A categoria é obrigatória e deve ser válida",
        }),

        departmentId: z
            .string()
            .min(
                1,
                "O departamento é obrigatório"
            ),

        type: z
            .string()
            .trim()
            .min(
                1,
                "O tipo do patrimônio é obrigatório"
            ),

        responsibleId: z
            .string()
            .min(1)
            .optional(),

        value: z
            .number()
            .min(
                0,
                "O valor deve ser maior ou igual a zero"
            )
            .optional(),

        acquisitionDate: z
            .string()
            .datetime()
            .optional(),

        imageUrl: z
            .string()
            .url(
                "A imagem deve possuir uma URL válida"
            )
            .optional(),
    })
    .refine(
        (data) => {
            if (!data.acquisitionDate) {
                return true;
            }

            return (
                new Date(data.acquisitionDate) <=
                new Date()
            );
        },
        {
            message:
                "A data de aquisição não pode ser futura",
            path: ["acquisitionDate"],
        }
    );

export const updateAssetSchema = z
    .object({
        name: z
            .string()
            .trim()
            .min(
                1,
                "O nome do patrimônio é obrigatório"
            )
            .max(150)
            .optional(),

        description: z
            .string()
            .trim()
            .max(1000)
            .nullable()
            .optional(),

        category: z
            .enum([
                "UTENSILIO",
                "COZINHA",
                "ACESSORIO",
                "MOVEIS",
                "DIVERSOS",
                "DECORACAO",
                "SOM",
                "ELETRODOMESTICO",
                "INFORMATICA",
                "ILUMINACAO",
                "LIVROS",
                "HIDRAULICOS",
                "FOTOGRAFIA",
            ], {
                message: "A categoria deve ser válida",
            })
            .optional(),


        departmentId: z
            .string()
            .min(
                1,
                "O departamento é obrigatório"
            )
            .optional(),

        type: z
            .string()
            .trim()
            .min(
                1,
                "O tipo do patrimônio é obrigatório"
            )
            .optional(),

        responsibleId: z
            .string()
            .min(1)
            .nullable()
            .optional(),

        value: z
            .number()
            .min(
                0,
                "O valor deve ser maior ou igual a zero"
            )
            .nullable()
            .optional(),

        acquisitionDate: z
            .string()
            .datetime()
            .nullable()
            .optional(),

        imageUrl: z
            .string()
            .url(
                "A imagem deve possuir uma URL válida"
            )
            .nullable()
            .optional(),

        status: z
            .enum([
                "AVAILABLE",
                "IN_USE",
                "MAINTENANCE",
                "DISPOSED",
            ])
            .optional(),
    })
    .refine(
        (data) => {
            if (!data.acquisitionDate) {
                return true;
            }

            return (
                new Date(data.acquisitionDate) <=
                new Date()
            );
        },
        {
            message:
                "A data de aquisição não pode ser futura",
            path: ["acquisitionDate"],
        }
    );

export const assetIdSchema = z.object({
    id: z
        .string()
        .min(
            1,
            "ID do patrimônio é obrigatório"
        ),
});

export const assetFiltersSchema = z.object({
    name: z.string().trim().min(1).optional(),

    category: z
        .enum([
            "UTENSILIO",
            "COZINHA",
            "ACESSORIO",
            "MOVEIS",
            "DIVERSOS",
            "DECORACAO",
            "SOM",
            "ELETRODOMESTICO",
            "INFORMATICA",
            "ILUMINACAO",
            "LIVROS",
            "HIDRAULICOS",
            "FOTOGRAFIA",
        ], {
            message: "A categoria deve ser válida",
        })
        .optional(),

    department: z.string().trim().min(1).optional(),

    status: z
        .enum([
            "AVAILABLE",
            "IN_USE",
            "MAINTENANCE",
            "DISPOSED",
        ])
        .optional(),

    type: z.string().trim().min(1).optional(),
});

export type CreateAssetDTO =
    z.infer<typeof createAssetSchema>;

export type UpdateAssetDTO =
    z.infer<typeof updateAssetSchema>;

export type AssetFiltersDTO = z.infer<
    typeof assetFiltersSchema
>;