import express from "express";
import {set_beaver} from "@routes/admin/projects/routes/services/routes/set-beaver";
import cors from "@middleware/authorisation/cors";
import process from "process";


export const services_router = express.Router()
services_router.use(express.json())
services_router.use(express.raw())

services_router.use(cors(process.env.PADDOCK_HOST||"", process.env.BACKEND_HOST||""))

services_router.patch("/set-beaver", set_beaver)