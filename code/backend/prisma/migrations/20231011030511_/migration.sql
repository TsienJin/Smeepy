/*
  Warnings:

  - You are about to drop the column `paddock_api_id` on the `beaver_log` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[key]` on the table `paddock_project` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `paddock_api_key` to the `beaver_log` table without a default value. This is not possible if the table is not empty.
  - The required column `key` was added to the `paddock_project` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "beaver_log" DROP CONSTRAINT "beaver_log_paddock_api_id_fkey";

-- DropIndex
DROP INDEX "beaver_log_paddock_api_id_created_at_idx";

-- AlterTable
ALTER TABLE "beaver_log" DROP COLUMN "paddock_api_id",
ADD COLUMN     "paddock_api_key" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "paddock_project" ADD COLUMN     "key" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "beaver_log_paddock_api_key_created_at_idx" ON "beaver_log"("paddock_api_key", "created_at" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "paddock_project_key_key" ON "paddock_project"("key");

-- CreateIndex
CREATE INDEX "paddock_project_id_idx" ON "paddock_project"("id");

-- AddForeignKey
ALTER TABLE "beaver_log" ADD CONSTRAINT "beaver_log_paddock_api_key_fkey" FOREIGN KEY ("paddock_api_key") REFERENCES "paddock_api_key"("key") ON DELETE RESTRICT ON UPDATE CASCADE;
