/*
  Warnings:

  - Added the required column `level` to the `beaver_log` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "beaver_log" ADD COLUMN     "level" TEXT NOT NULL;
