-- CreateTable
CREATE TABLE "plantations" (
    "id" TEXT NOT NULL,
    "harvest_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "plantations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "plantations_harvest_id_idx" ON "plantations"("harvest_id");

-- AddForeignKey
ALTER TABLE "plantations" ADD CONSTRAINT "plantations_harvest_id_fkey" FOREIGN KEY ("harvest_id") REFERENCES "harvests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
