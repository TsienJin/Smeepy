import {Handler, Request, Response} from "express";
import {decodeJwt} from "@src/utils/jwt";
import {validate_schema} from "@src/schema/validate_schema";
import {
  endpoint_project_create_schema,
  endpoint_project_create_schema_validator
} from "@routes/admin/projects/structs/project_endpoints";
import DBClient from "@src/objects/db";
import {BackendHandler, BackendRequest} from "@src/globals/types_and_all.types";
import assert_not_null from "@src/utils/assert_not_null";
import {IJwt} from "@src/utils/jwt.types";


export const create_project:BackendHandler = async (req:Request, res:Response) => {

  try {

    // ensures that required params are passed in
    const params = await validate_schema<endpoint_project_create_schema>(endpoint_project_create_schema_validator, req.body)
    if(params===undefined){
      res.status(400).json({message:"Missing fields!"})
      return
    }

    // fetch user information
    //@ts-ignore
    const userJwt = decodeJwt(req.headers?.smeepy)

    // create project with provided params
    const proj = await DBClient.instance.paddock_project.create({
      data: {
        name: params.name,
        description: params.description||"",
        paddock_user_creator_Id: userJwt.user_id
      },
    })
    
    res.status(200).json({message:"Created project!", project:proj})


  } catch (e) {
    console.error(e)
    res.status(500).json({message:"Unable to create new project!"})
  }

}