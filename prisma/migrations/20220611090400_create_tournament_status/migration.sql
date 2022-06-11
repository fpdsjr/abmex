-- CreateEnum
CREATE TYPE "Status" AS ENUM ('INICIADO');

-- AlterTable
ALTER TABLE "campeonato" ADD COLUMN     "status" "Status";
