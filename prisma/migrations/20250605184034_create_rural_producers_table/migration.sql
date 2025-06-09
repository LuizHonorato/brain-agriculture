-- CreateEnum
CREATE TYPE "RuralProducerPersonType" AS ENUM ('natural_person', 'legal_person');

-- CreateTable
CREATE TABLE "rural_producers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "person_type" "RuralProducerPersonType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "rural_producers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "rural_producers_document_key" ON "rural_producers"("document");
