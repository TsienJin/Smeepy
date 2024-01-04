import {Handler, Request, Response} from "express";
import {decodeJwt} from "@src/utils/jwt";
import {validate_schema} from "@src/schema/validate_schema";
import {
  endpoint_project_key_enable_beaver_schema,
  endpoint_project_key_enable_beaver_validator
} from "@routes/admin/projects/structs/project_endpoints";
import DBClient from "@src/objects/db";


export const set_beaver:Handler = async(req:Request, res:Response)=> {

  try{

    // get user jwt
    const userJwt = decodeJwt(req.headers.smeepy as string)

    const params = await validate_schema<endpoint_project_key_enable_beaver_schema>(endpoint_project_key_enable_beaver_validator, req.body)
    if(params===undefined){
      res.status(400).json({message:"Missing parameters!"})
      return
    }

    await DBClient.instance.paddock_api_key.update({
      where: {
        id: params.id,
        paddock_project: {
          paddock_user_creator_Id: userJwt.user_id
        }
      },
      data: {
        paddock_api_key_services: {
          update: {
            enable_beaver: params.enable_beaver
          }
        }
      }
    })

    res.status(200).json({message:"Ok!"})



  } catch (e) {
    console.error(e)
    res.status(500).json({message:"Unable to set beaver attribute!"})
  }
}