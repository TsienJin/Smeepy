
######################################
########### Local commands ###########
######################################

.PHONY:local-db
local-db:
	cd docker && docker compose --env-file docker.local.env --file dockercompose.local.yml build database-postgresql
	cd docker && docker compose --env-file docker.local.env --file dockercompose.local.yml up database-postgresql -d


.PHONY:local-stop
local-stop:
	cd docker && docker compose --env-file docker.local.env --file dockercompose.local.yml stop
