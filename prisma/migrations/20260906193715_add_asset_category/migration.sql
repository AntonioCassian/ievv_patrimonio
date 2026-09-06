/*
  Warnings:

  - Changed the type of `category` on the `Asset` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "AssetCategory" AS ENUM ('UTENSILIO', 'COZINHA', 'ACESSORIO', 'MOVEIS', 'DIVERSOS', 'DECORACAO', 'SOM', 'ELETRODOMESTICO', 'INFORMATICA', 'ILUMINACAO', 'LIVROS', 'HIDRAULICOS', 'FOTOGRAFIA');

-- AlterTable
ALTER TABLE "Asset" DROP COLUMN "category",
ADD COLUMN     "category" "AssetCategory" NOT NULL;
