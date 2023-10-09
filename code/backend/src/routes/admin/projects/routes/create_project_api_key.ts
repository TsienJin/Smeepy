import {Handler, Request, Response} from "express";
import {decodeJwt} from "@src/utils/jwt";
import {validate_schema} from "@src/schema/validate_schema";
import {
  endpoint_project_create_api_key_schema,
  endpoint_project_create_api_key_schema_validator
} from "@routes/admin/projects/structs/project_endpoints";
import DBClient from "@src/objects/db";


export const create_project_api_key:Handler = async(req:Request, res:Response)=> {

  try{

    // get params from req
    const params = await validate_schema<endpoint_project_create_api_key_schema>(endpoint_project_create_api_key_schema_validator, req.body)
    if(params===undefined){
      res.status(400).json({message:"Missing parameters!"})
      return
    }

    // create API key
    const api_key = await DBClient.instance.paddock_api_key.create({
      data: {
        label: params.api_label,
        description: params.api_description,
        paddock_project: {
          connect: {
            id: params.project_id
          }
        }
      },

    })

    res.status(200).json({message:"Ok!", api_key:api_key})


  } catch (e) {
    console.error(e)
    res.status(500).json({message:"Unable to create API key for this project!"})
  }

}