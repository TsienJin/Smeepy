/*
  Warnings:

  - You are about to drop the column `key` on the `paddock_project` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "paddock_project_key_key";

-- AlterTable
ALTER TABLE "paddock_project" DROP COLUMN "key";
