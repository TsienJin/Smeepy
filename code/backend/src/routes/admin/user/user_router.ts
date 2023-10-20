import express, {Handler, Request, Response} from "express";
import {create_user} from "@routes/admin/user/routes/create";
import {login_user} from "@routes/admin/user/routes/login";
import cors from "@middleware/authorisation/cors";
import process from "process";
import cookieParser from "cookie-parser";
import {validate_session} from "@routes/admin/user/routes/validate_session";

export const user_router = express.Router()
user_router.use(express.json())
user_router.use(express.raw())
user_router.use(cookieParser())
user_router.use(cors(process.env.PADDOCK_HOST||"", process.env.BACKEND_HOST||""))


/**
 * Endpoint to validate user JWT
 */
user_router.get('/validate', validate_session)

/**
 * Endpoint to create a new user
 */
user_router.post("/create", create_user)

/**
 * Endpoint to login user using email password
 */
user_router.post("/login", login_user)