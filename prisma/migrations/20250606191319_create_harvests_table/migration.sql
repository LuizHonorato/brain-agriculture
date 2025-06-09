-- CreateTable
CREATE TABLE "harvests" (
    "id" TEXT NOT NULL,
    "farm_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "harvests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "harvests_farm_id_idx" ON "harvests"("farm_id");

-- AddForeignKey
ALTER TABLE "harvests" ADD CONSTRAINT "harvests_farm_id_fkey" FOREIGN KEY ("farm_id") REFERENCES "farms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
