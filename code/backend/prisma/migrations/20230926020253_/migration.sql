-- CreateIndex
CREATE INDEX "breaver_log_api_key_created_at_idx" ON "breaver_log"("api_key", "created_at" DESC);
