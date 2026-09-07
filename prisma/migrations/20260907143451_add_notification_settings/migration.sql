-- CreateTable
CREATE TABLE "NotificationSettings" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "notificacaoEmprestimo" BOOLEAN NOT NULL DEFAULT true,
    "notificacaoDevolucao" BOOLEAN NOT NULL DEFAULT true,
    "notificacaoUsufruto" BOOLEAN NOT NULL DEFAULT true,
    "notificacaoDoacao" BOOLEAN NOT NULL DEFAULT true,
    "notificacaoPatrimonio" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NotificationSettings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NotificationSettings_userId_key" ON "NotificationSettings"("userId");

-- CreateIndex
CREATE INDEX "Loan_returnedById_idx" ON "Loan"("returnedById");

-- AddForeignKey
ALTER TABLE "NotificationSettings" ADD CONSTRAINT "NotificationSettings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
