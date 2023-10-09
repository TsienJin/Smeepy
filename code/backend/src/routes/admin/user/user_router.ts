import express, {Handler, Request, Response} from "express";
import {create_user} from "@routes/admin/user/routes/create";
import {login_user} from "@routes/admin/user/routes/login";


export const user_router = express.Router()
user_router.use(express.json())
user_router.use(express.raw())


/**
 * Endpoint to create a new user
 */
user_router.post("/create", create_user)

/**
 * Endpoint to login user using email password
 */
user_router.post("/login", login_user)