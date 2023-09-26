/*
  Warnings:

  - You are about to drop the `breaver_log` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "breaver_log";

-- CreateTable
CREATE TABLE "paddock_project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "paddock_project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paddock_api_key" (
    "key" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "project_id" TEXT NOT NULL,

    CONSTRAINT "paddock_api_key_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "beaver_log" (
    "id" TEXT NOT NULL,
    "log" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "api_key" TEXT,

    CONSTRAINT "beaver_log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "paddock_project_id_key" ON "paddock_project"("id");

-- CreateIndex
CREATE UNIQUE INDEX "paddock_api_key_key_key" ON "paddock_api_key"("key");

-- CreateIndex
CREATE INDEX "beaver_log_api_key_created_at_idx" ON "beaver_log"("api_key", "created_at" DESC);

-- CreateIndex
CREATE INDEX "beaver_log_api_key_idx" ON "beaver_log"("api_key");

-- AddForeignKey
ALTER TABLE "paddock_api_key" ADD CONSTRAINT "paddock_api_key_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "paddock_project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beaver_log" ADD CONSTRAINT "beaver_log_api_key_fkey" FOREIGN KEY ("api_key") REFERENCES "paddock_api_key"("key") ON DELETE SET NULL ON UPDATE CASCADE;
