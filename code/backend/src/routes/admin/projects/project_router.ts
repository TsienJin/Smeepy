import express from "express";
import require_login from "@middleware/authorisation/require_login";
import {create_project} from "@routes/admin/projects/routes/create_project";
import {get_projects} from "@routes/admin/projects/routes/get_projects";
import {create_project_api_key} from "@routes/admin/projects/routes/create_project_api_key";
import cors from "@middleware/authorisation/cors";
import * as process from "process"
import {get_project_by_id} from "@routes/admin/projects/routes/get_project_by_id";



export const project_router = express.Router()
project_router.use(express.json())
project_router.use(express.raw())


project_router.post("/create", create_project)
project_router.post("/create-api-key", create_project_api_key)
project_router.post("/get-by-id", get_project_by_id)
project_router.get("/all", get_projects)
