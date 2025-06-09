-- CreateTable
CREATE TABLE "farms" (
    "id" TEXT NOT NULL,
    "rural_producer_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "area_total" DOUBLE PRECISION NOT NULL,
    "arable_area" DOUBLE PRECISION NOT NULL,
    "vegetation_area" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "farms_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "farms_rural_producer_id_idx" ON "farms"("rural_producer_id");

-- AddForeignKey
ALTER TABLE "farms" ADD CONSTRAINT "farms_rural_producer_id_fkey" FOREIGN KEY ("rural_producer_id") REFERENCES "rural_producers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
