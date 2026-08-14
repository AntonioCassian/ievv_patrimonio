-- CreateEnum
CREATE TYPE "OperationType" AS ENUM ('USUFRUTO', 'DOACAO');

-- CreateEnum
CREATE TYPE "OperationStatus" AS ENUM ('ACTIVE', 'FINISHED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "UsufructHistoryType" AS ENUM ('CREATED', 'RENEWED');

-- CreateTable
CREATE TABLE "AssetOperation" (
    "id" TEXT NOT NULL,
    "type" "OperationType" NOT NULL,
    "status" "OperationStatus" NOT NULL DEFAULT 'ACTIVE',
    "assetId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "operationDate" TIMESTAMP(3) NOT NULL,
    "observations" TEXT,
    "responsibleId" TEXT,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "purpose" TEXT,
    "donor" TEXT,
    "donationDate" TIMESTAMP(3),
    "document" TEXT,
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssetOperation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsufructHistory" (
    "id" TEXT NOT NULL,
    "operationId" TEXT NOT NULL,
    "type" "UsufructHistoryType" NOT NULL,
    "previousEndDate" TIMESTAMP(3),
    "newEndDate" TIMESTAMP(3),
    "justification" TEXT,
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UsufructHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AssetOperation_assetId_idx" ON "AssetOperation"("assetId");

-- CreateIndex
CREATE INDEX "AssetOperation_responsibleId_idx" ON "AssetOperation"("responsibleId");

-- CreateIndex
CREATE INDEX "AssetOperation_createdById_idx" ON "AssetOperation"("createdById");

-- CreateIndex
CREATE INDEX "AssetOperation_type_idx" ON "AssetOperation"("type");

-- CreateIndex
CREATE INDEX "AssetOperation_status_idx" ON "AssetOperation"("status");

-- CreateIndex
CREATE INDEX "UsufructHistory_operationId_idx" ON "UsufructHistory"("operationId");

-- CreateIndex
CREATE INDEX "UsufructHistory_createdById_idx" ON "UsufructHistory"("createdById");

-- AddForeignKey
ALTER TABLE "AssetOperation" ADD CONSTRAINT "AssetOperation_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetOperation" ADD CONSTRAINT "AssetOperation_responsibleId_fkey" FOREIGN KEY ("responsibleId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetOperation" ADD CONSTRAINT "AssetOperation_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsufructHistory" ADD CONSTRAINT "UsufructHistory_operationId_fkey" FOREIGN KEY ("operationId") REFERENCES "AssetOperation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsufructHistory" ADD CONSTRAINT "UsufructHistory_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
