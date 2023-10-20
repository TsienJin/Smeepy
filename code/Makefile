
.DEFAULT: local


######################################
########### Local commands ###########
######################################

.PHONY:local
local:
	@concurrently --names Database,Backend,Paddock --prefix "[{name}]" "make local-db" "make local-backend" "make local-paddock"

# Starts DB, paddock and backend
.PHONY:local-2
local-2:local-db local-backend local-paddock



.PHONY:local-backend
local-backend:
	@cd backend && npm run dev

.PHONY:local-paddock
local-paddock:
	@cd paddock && npm run dev


# Starts DB instances
.PHONY:local-db
local-db:
	@cd docker && docker compose --env-file docker.local.env --file dockercompose.local.yml build database-postgresql
	@cd docker && docker compose --env-file docker.local.env --file dockercompose.local.yml up database-postgresql database-redis -d

# Creates terminal for connection to local Redis client
.PHONY:local-db-redis
local-db-redis:
	@nc -v localhost 9010


.PHONY:local-stop
local-stop:
	@cd docker && docker compose --env-file docker.local.env --file dockercompose.local.yml stop


