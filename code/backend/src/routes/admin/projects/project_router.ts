import express from "express";
import require_login from "@middleware/authorisation/require_login";
import {create_project} from "@routes/admin/projects/routes/create_project";
import {get_projects} from "@routes/admin/projects/routes/get_projects";
import {create_project_api_key} from "@routes/admin/projects/routes/create_project_api_key";
import cors from "@middleware/authorisation/cors";
import * as process from "process"



export const project_router = express.Router()
project_router.use(express.json())
project_router.use(express.raw())


project_router.use(cors(process.env.PADDOCK_HOST||""))
// project_router.use(require_login())

project_router.post("/create", create_project)
project_router.post("/create-api-key", create_project_api_key)
project_router.get("/all", get_projects)
