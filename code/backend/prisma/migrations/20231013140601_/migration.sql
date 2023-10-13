/*
  Warnings:

  - You are about to drop the column `paddock_api_key` on the `beaver_log` table. All the data in the column will be lost.
  - Added the required column `paddock_api_id` to the `beaver_log` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "beaver_log" DROP CONSTRAINT "beaver_log_paddock_api_key_fkey";

-- DropIndex
DROP INDEX "beaver_log_paddock_api_key_created_at_idx";

-- DropIndex
DROP INDEX "beaver_log_paddock_api_key_idx";

-- AlterTable
ALTER TABLE "beaver_log" DROP COLUMN "paddock_api_key",
ADD COLUMN     "paddock_api_id" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "beaver_log_paddock_api_id_created_at_idx" ON "beaver_log"("paddock_api_id", "created_at" DESC);

-- CreateIndex
CREATE INDEX "beaver_log_paddock_api_id_idx" ON "beaver_log"("paddock_api_id");

-- AddForeignKey
ALTER TABLE "beaver_log" ADD CONSTRAINT "beaver_log_paddock_api_id_fkey" FOREIGN KEY ("paddock_api_id") REFERENCES "paddock_api_key"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
