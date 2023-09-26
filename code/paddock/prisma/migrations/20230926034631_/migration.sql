/*
  Warnings:

  - Added the required column `label` to the `paddock_api_key` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "paddock_api_key" ADD COLUMN     "description" TEXT,
ADD COLUMN     "label" TEXT NOT NULL;
