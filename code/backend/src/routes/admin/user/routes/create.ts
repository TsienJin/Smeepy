import {Handler, Request, Response} from "express";
import {validate_schema} from "@src/schema/validate_schema";
import {endpoint_user_create_schema, endpoint_user_create_schema_validator} from "@src/schema/endpoints/user";
import DBClient from "@src/objects/db";
import bcrypt from "bcrypt";
import {generateJwt} from "@src/utils/jwt";
import {set_auth_header} from "@src/utils/auth_header";
import console from "console";


export const create_user:Handler = async (req:Request, res:Response) => {
  try{
    const result = await validate_schema<endpoint_user_create_schema>(endpoint_user_create_schema_validator, req.body)
    if(result==undefined){
      res.status(400).send("Missing fields!")
      return
    }

    
    const user = await DBClient.instance.paddock_user.create({
      data: {
        email: result.email,
        password: await bcrypt.hash(result.password, 3)
      }
    })

    const jwt = generateJwt({user_id:user.id})

    res.setHeader("Authorization", `${set_auth_header(jwt)}`).send("Boop!")
  } catch (e) {
    console.log(e)
    res.status(500).send("Something went wrong creating user!")
  }
}