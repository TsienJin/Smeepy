import {Handler, Request, Response} from "express";
import {decodeJwt} from "@src/utils/jwt";
import {validate_schema} from "@src/schema/validate_schema";
import {
  endpoint_project_key_delete_by_id_schema,
  endpoint_project_key_delete_by_id_validator
} from "@routes/admin/projects/structs/project_endpoints";
import DBClient from "@src/objects/db";


export const delete_project_api_key_by_id:Handler = async (req:Request, res:Response) => {

  try{

    // get user JWT from header
    const userJwt = decodeJwt(req.headers.smeepy as string ||"")

    const params = await validate_schema<endpoint_project_key_delete_by_id_schema>(endpoint_project_key_delete_by_id_validator, req.body)
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
        deleted: true
      }
    })

    res.status(200).json({message:"Deleted API key!"})


  } catch (e) {
    console.error(e)
    res.status(500).json({message:"Unable to delete specified API key!"})
  }

}