import express from "express";
import {beaver_router} from "@routes/api/beaver/beaver_router";


export const api_router = express.Router()

api_router.use("/beaver", beaver_router)