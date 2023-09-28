import express, {Handler, Request, Response} from "express";
import {endpoint_user_create_schema, endpoint_user_create_schema_validator} from "@src/schema/endpoints/user";
import DBClient from "@src/objects/db";
import bcrypt from 'bcrypt'
import * as console from "console";
import {generateJwt} from "@src/utils/jwt";
import {set_auth_header} from "@src/utils/auth_header";
import {validate_schema} from "@src/schema/validate_schema";
import {create_user} from "@routes/admin/user/routes/create";


export const user_router = express.Router()
user_router.use(express.json())


const something:Handler = async (req:Request, res:Response) => {

}


/**
 * Endpoint to create a new user
 */
user_router.post("/create", create_user)