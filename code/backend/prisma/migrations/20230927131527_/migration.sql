/*
  Warnings:

  - You are about to drop the column `api_key` on the `beaver_log` table. All the data in the column will be lost.
  - You are about to drop the column `project_id` on the `paddock_api_key` table. All the data in the column will be lost.
  - Added the required column `paddock_api_key` to the `beaver_log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paddock_project_id` to the `paddock_api_key` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "beaver_log" DROP CONSTRAINT "beaver_log_api_key_fkey";

-- DropForeignKey
ALTER TABLE "paddock_api_key" DROP CONSTRAINT "paddock_api_key_project_id_fkey";

-- DropIndex
DROP INDEX "beaver_log_api_key_created_at_idx";

-- DropIndex
DROP INDEX "beaver_log_api_key_idx";

-- AlterTable
ALTER TABLE "beaver_log" DROP COLUMN "api_key",
ADD COLUMN     "paddock_api_key" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "paddock_api_key" DROP COLUMN "project_id",
ADD COLUMN     "paddock_project_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "paddock_project" ADD COLUMN     "paddock_user_creator_Id" TEXT;

-- CreateTable
CREATE TABLE "paddock_user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "paddock_user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "paddock_user_id_key" ON "paddock_user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "paddock_user_email_key" ON "paddock_user"("email");

-- CreateIndex
CREATE INDEX "beaver_log_paddock_api_key_created_at_idx" ON "beaver_log"("paddock_api_key", "created_at" DESC);

-- CreateIndex
CREATE INDEX "beaver_log_paddock_api_key_idx" ON "beaver_log"("paddock_api_key");

-- AddForeignKey
ALTER TABLE "paddock_project" ADD CONSTRAINT "paddock_project_paddock_user_creator_Id_fkey" FOREIGN KEY ("paddock_user_creator_Id") REFERENCES "paddock_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paddock_api_key" ADD CONSTRAINT "paddock_api_key_paddock_project_id_fkey" FOREIGN KEY ("paddock_project_id") REFERENCES "paddock_project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beaver_log" ADD CONSTRAINT "beaver_log_paddock_api_key_fkey" FOREIGN KEY ("paddock_api_key") REFERENCES "paddock_api_key"("key") ON DELETE RESTRICT ON UPDATE CASCADE;
