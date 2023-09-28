import express from "express";
import {user_router} from "@routes/admin/user/user_router";
import {project_router} from "@routes/admin/projects/project_router";
import cors from "@middleware/authorisation/cors";
import * as process from "process";


export const admin_router = express.Router()

admin_router.use(cors(process.env.PADDOCK_HOST||"", process.env.BACKEND_HOST||""))

admin_router.get("/", (req, res)=>{
  res.send("Hello!")
})



admin_router.use("/user", user_router)
admin_router.use("/project", project_router)
