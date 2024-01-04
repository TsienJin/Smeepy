import {Handler, Request, Response} from "express";
import {decodeJwt} from "@src/utils/jwt";
import {validate_schema} from "@src/schema/validate_schema";
import {
  endpoint_project_keys_get_by_id_schema,
  endpoint_project_keys_get_by_id_validator
} from "@routes/admin/projects/structs/project_endpoints";
import DBClient from "@src/objects/db";


export const get_project_api_keys_by_id:Handler = async (req:Request, res:Response):Promise<any> => {

  try{

    // get user JWT from header
    const userJwt = decodeJwt(req.headers.smeepy as string ||"")

    // get project ID from request
    const params = await validate_schema<endpoint_project_keys_get_by_id_schema>(endpoint_project_keys_get_by_id_validator, req.body)
    if(params===undefined){
      res.status(400).json({message:"Missing parameters!"})
      return
    }

    const keys = await DBClient.instance.paddock_project.findFirst(
      {
        select: {
          keys: {
            select: {
              id: true,
              label: true,
              description: true,
              paddock_api_key_services: {
                select: {
                  enable_beaver: true
                }
              }
            },
            orderBy: {
              created_at: 'asc'
            },
            where: {
              deleted: false
            }
          },
        },
        where: {
          paddock_user_creator_Id: {
            equals: userJwt.user_id
          },
          id: {
            equals: params.id
          },
        }
      }
    )

    res.status(200).json({...keys})


  } catch (e) {
    console.error(e)
    res.status(500).json({message:"Unable to fetch API keys for specified project!"})
  }

}