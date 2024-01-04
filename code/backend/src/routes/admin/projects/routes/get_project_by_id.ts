import {Handler, Request} from "express";
import {Response} from "express-serve-static-core";
import {decodeJwt} from "@src/utils/jwt";
import DBClient from "@src/objects/db";
import {validate_schema} from "@src/schema/validate_schema";
import {
  endpoint_project_get_by_id_schema,
  endpoint_project_get_by_id_validator
} from "@routes/admin/projects/structs/project_endpoints";


/**
 * ROUTE for fetching product by UUID ID, and user ID.
 * @param req
 * @param res
 */
export const get_project_by_id:Handler = async (req:Request, res:Response) => {

  try{

    const userJwt = decodeJwt(req.headers.smeepy as string ||"")

    const params = await validate_schema<endpoint_project_get_by_id_schema>(endpoint_project_get_by_id_validator, req.body)
    if(params===undefined){
      res.status(400).json({message:"Missing parameters!"})
      return
    }

    // Ensures that product ID fetched was created by the same user.
    const project_promise = DBClient.instance.paddock_project.findFirst({
      select: {
        id: true,
        name: true,
        description: true,
        paddock_user_creator: {
          select: {
            first_name: true,
            last_name: true
          }
        }
      },
      where: {
        paddock_user_creator_Id: {
          equals: userJwt.user_id
        },
        id: {
          equals: params.id
        },
      }
    })

    // get number of API keys linked to the project
    const api_key_promise = DBClient.instance.paddock_api_key.aggregate({
      _count: true,
      where:{
        paddock_project_id: {
          equals: params.id
        },
        deleted: {
          equals: false
        }
      }
    })

    // TODO count number of credits remaining for the project


    // Run all promises in parallel
    const [project, api_key] = await Promise.all([
      project_promise,
      api_key_promise
    ])


    res.status(200).json({
      message: "ok!",
        project: {
          ...project,
          num_keys:api_key._count,
          credits:0
      },
    })


  } catch (e) {
    console.error(e)
    res.status(500).json({message:"Unable to fetch project with specified ID!"})
  }

}