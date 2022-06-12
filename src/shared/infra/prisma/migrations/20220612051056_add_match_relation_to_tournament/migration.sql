-- AlterTable
ALTER TABLE "partida" ADD COLUMN     "campeonatoId" TEXT;

-- AddForeignKey
ALTER TABLE "partida" ADD CONSTRAINT "partida_campeonatoId_fkey" FOREIGN KEY ("campeonatoId") REFERENCES "campeonato"("id") ON DELETE SET NULL ON UPDATE CASCADE;
