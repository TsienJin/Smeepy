/*
  Warnings:

  - Added the required column `label` to the `beaver_log` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "beaver_log" ADD COLUMN     "label" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "beaver_log_label_idx" ON "beaver_log"("label");
