-- CreateTable
CREATE TABLE "partida" (
    "id" TEXT NOT NULL,
    "timeA" TEXT NOT NULL,
    "timeB" TEXT NOT NULL,
    "vencedor" TEXT NOT NULL,

    CONSTRAINT "partida_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "partida" ADD CONSTRAINT "partida_timeA_fkey" FOREIGN KEY ("timeA") REFERENCES "time"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "partida" ADD CONSTRAINT "partida_timeB_fkey" FOREIGN KEY ("timeB") REFERENCES "time"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
