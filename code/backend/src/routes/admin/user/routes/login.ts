import {Request, Response} from "express";
import {validate_schema} from "@src/schema/validate_schema";
import {
  endpoint_user_email_login_schema,
  endpoint_user_email_login_schema_validator
} from "@routes/admin/user/structs/user_endpoints";
import DBClient from "@src/objects/db";
import {generateJwt} from "@src/utils/jwt";
import bcrypt from "bcrypt";
import {set_auth_header} from "@src/utils/auth_header";


export async function login_user(req:Request, res:Response){

  try {
    const info = await validate_schema<endpoint_user_email_login_schema>(endpoint_user_email_login_schema_validator, req.body)

    if(info == undefined){ // if post data does not fit endpoint requirements
      res.status(401).json({message:"Invalid login!"})
      return
    }

    const user = await DBClient.instance.paddock_user.findFirst({
      select: {
        id: true,
        password: true
      },
      where: {
        email: info?.email
      }
    })

    if(user==null || !bcrypt.compareSync(info?.password, user.password)){
      res.status(401).json({message:"Invalid login AAA!"})
      return
    }

    const userJwt = generateJwt({user_id:user?.id||""})

    res.setHeader("smeepy", userJwt)
    // res.cookie("Authorization", userJwt, {httpOnly:true, path:"/"})
    res.status(200).json({message:"Login successful!"})

  } catch (e) {
    console.error("Unable to login!")
    res.status(400).json({message: "Unable to login!"})
    return
  }

}