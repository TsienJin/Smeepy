import {Handler, Request, Response} from "express";
import {decodeJwt} from "@src/utils/jwt";
import {validate_schema} from "@src/schema/validate_schema";
import {
  endpoint_project_dashboard_get_by_id_schema,
  endpoint_project_dashboard_get_by_id_validator,
} from "@routes/admin/projects/structs/project_endpoints";


/**
 * Method to fetch dashboard information for a project, by ID
 * @param req
 * @param res
 */
export const get_project_dashboard_by_id:Handler = async (req:Request, res:Response) => {

  try{

    // Get user JWT from header
    const userJwt = decodeJwt(req.headers.smeepy as string ||"")

    // Gets the ID required
    const params = await validate_schema<endpoint_project_dashboard_get_by_id_schema>(endpoint_project_dashboard_get_by_id_validator, req.body)
    if(params===undefined){
      res.status(400).json({message:"Missing parameters!"})
      return
    }

    res.status(200).json({message:"Placeholder!"})

  } catch (e) {
    console.error(e)
    res.status(500).json({message:"Unable to fetch dashboard information!"})
  }


}