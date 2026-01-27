/*
  Warnings:

  - You are about to drop the `Buku` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Buku";

-- CreateTable
CREATE TABLE "buku" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "pembuat" TEXT NOT NULL,
    "diterbitkan" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "buku_pkey" PRIMARY KEY ("id")
);
