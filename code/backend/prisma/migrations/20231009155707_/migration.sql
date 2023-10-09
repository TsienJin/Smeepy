/*
  Warnings:

  - Made the column `paddock_user_creator_Id` on table `paddock_project` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "paddock_project" DROP CONSTRAINT "paddock_project_paddock_user_creator_Id_fkey";

-- AlterTable
ALTER TABLE "paddock_project" ALTER COLUMN "paddock_user_creator_Id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "paddock_project" ADD CONSTRAINT "paddock_project_paddock_user_creator_Id_fkey" FOREIGN KEY ("paddock_user_creator_Id") REFERENCES "paddock_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
