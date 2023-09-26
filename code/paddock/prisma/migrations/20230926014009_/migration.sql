-- CreateTable
CREATE TABLE "breaver_log" (
    "id" TEXT NOT NULL,
    "api_key" TEXT NOT NULL,
    "log" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "breaver_log_pkey" PRIMARY KEY ("id")
);
