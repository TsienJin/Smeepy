
######################################
########### Local commands ###########
######################################

# Starts DB instances
.PHONY:local-db
local-db:
	cd docker && docker compose --env-file docker.local.env --file dockercompose.local.yml build database-postgresql
	cd docker && docker compose --env-file docker.local.env --file dockercompose.local.yml up database-postgresql database-redis -d

# Creates terminal for connection to local Redis client
.PHONY:local-db-redis
local-db-redis:
	nc -v localhost 9010


.PHONY:local-stop
local-stop:
	cd docker && docker compose --env-file docker.local.env --file dockercompose.local.yml stop


