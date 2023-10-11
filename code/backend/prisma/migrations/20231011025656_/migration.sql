-- CreateTable
CREATE TABLE "paddock_user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "first_name" TEXT NOT NULL DEFAULT '',
    "last_name" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "paddock_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paddock_project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paddock_user_creator_Id" TEXT NOT NULL,

    CONSTRAINT "paddock_project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paddock_api_key" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paddock_project_id" TEXT NOT NULL,
    "paddock_api_key_services_id" TEXT NOT NULL,

    CONSTRAINT "paddock_api_key_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paddock_api_key_services" (
    "id" TEXT NOT NULL,
    "enable_beaver" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "paddock_api_key_services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beaver_log" (
    "id" TEXT NOT NULL,
    "log" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paddock_api_id" TEXT NOT NULL,

    CONSTRAINT "beaver_log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "paddock_user_id_key" ON "paddock_user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "paddock_user_email_key" ON "paddock_user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "paddock_project_id_key" ON "paddock_project"("id");

-- CreateIndex
CREATE UNIQUE INDEX "paddock_api_key_key_key" ON "paddock_api_key"("key");

-- CreateIndex
CREATE UNIQUE INDEX "paddock_api_key_paddock_api_key_services_id_key" ON "paddock_api_key"("paddock_api_key_services_id");

-- CreateIndex
CREATE INDEX "paddock_api_key_id_key_idx" ON "paddock_api_key"("id", "key");

-- CreateIndex
CREATE INDEX "paddock_api_key_key_idx" ON "paddock_api_key"("key");

-- CreateIndex
CREATE INDEX "beaver_log_paddock_api_id_created_at_idx" ON "beaver_log"("paddock_api_id", "created_at" DESC);

-- AddForeignKey
ALTER TABLE "paddock_project" ADD CONSTRAINT "paddock_project_paddock_user_creator_Id_fkey" FOREIGN KEY ("paddock_user_creator_Id") REFERENCES "paddock_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paddock_api_key" ADD CONSTRAINT "paddock_api_key_paddock_project_id_fkey" FOREIGN KEY ("paddock_project_id") REFERENCES "paddock_project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paddock_api_key" ADD CONSTRAINT "paddock_api_key_paddock_api_key_services_id_fkey" FOREIGN KEY ("paddock_api_key_services_id") REFERENCES "paddock_api_key_services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beaver_log" ADD CONSTRAINT "beaver_log_paddock_api_id_fkey" FOREIGN KEY ("paddock_api_id") REFERENCES "paddock_api_key"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
