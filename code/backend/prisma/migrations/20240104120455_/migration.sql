/*
  Warnings:

  - Made the column `label` on table `paddock_api_key` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "paddock_api_key" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "label" SET NOT NULL;
