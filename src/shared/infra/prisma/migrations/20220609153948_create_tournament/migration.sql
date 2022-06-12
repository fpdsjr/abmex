-- CreateTable
CREATE TABLE "Campeonato" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "premiacao" INTEGER NOT NULL,

    CONSTRAINT "Campeonato_pkey" PRIMARY KEY ("id")
);
