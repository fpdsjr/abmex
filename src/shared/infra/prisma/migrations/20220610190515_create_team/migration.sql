/*
  Warnings:

  - You are about to drop the `Campeonato` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Campeonato";

-- CreateTable
CREATE TABLE "campeonato" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "premiacao" INTEGER NOT NULL,

    CONSTRAINT "campeonato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "time" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "iniciais" TEXT NOT NULL,
    "campeonatoId" TEXT,

    CONSTRAINT "time_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "time" ADD CONSTRAINT "time_campeonatoId_fkey" FOREIGN KEY ("campeonatoId") REFERENCES "campeonato"("id") ON DELETE SET NULL ON UPDATE CASCADE;
