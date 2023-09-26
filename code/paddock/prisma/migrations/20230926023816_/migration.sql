/*
  Warnings:

  - Made the column `api_key` on table `beaver_log` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "beaver_log" DROP CONSTRAINT "beaver_log_api_key_fkey";

-- AlterTable
ALTER TABLE "beaver_log" ALTER COLUMN "api_key" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "beaver_log" ADD CONSTRAINT "beaver_log_api_key_fkey" FOREIGN KEY ("api_key") REFERENCES "paddock_api_key"("key") ON DELETE RESTRICT ON UPDATE CASCADE;
