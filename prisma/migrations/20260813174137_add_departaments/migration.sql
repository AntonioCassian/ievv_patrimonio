/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Department` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `leaderId` to the `Department` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Department` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DepartmentStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- AlterTable
ALTER TABLE "Department" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdById" TEXT,
ADD COLUMN     "leaderId" TEXT NOT NULL,
ADD COLUMN     "status" "DepartmentStatus" NOT NULL DEFAULT 'ACTIVE',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Department_name_key" ON "Department"("name");

-- CreateIndex
CREATE INDEX "Department_leaderId_idx" ON "Department"("leaderId");

-- CreateIndex
CREATE INDEX "Department_createdById_idx" ON "Department"("createdById");

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_leaderId_fkey" FOREIGN KEY ("leaderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
