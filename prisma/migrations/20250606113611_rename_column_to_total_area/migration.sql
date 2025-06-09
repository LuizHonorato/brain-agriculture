/*
  Warnings:

  - You are about to drop the column `area_total` on the `farms` table. All the data in the column will be lost.
  - Added the required column `total_area` to the `farms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "farms" DROP COLUMN "area_total",
ADD COLUMN     "total_area" DOUBLE PRECISION NOT NULL;
