import {BackendHandler, BackendRequest, IApi} from "@src/globals/types_and_all.types";
import {Response} from "express-serve-static-core";
import console from "console";
import assert_not_null from "@src/utils/assert_not_null";
import DBClient from "@src/objects/db";
import {validate_schema} from "@src/schema/validate_schema";
import {
  endpoint_beaver_log_fetch_schema,
  endpoint_beaver_log_fetch_schema_validator
} from "@routes/api/beaver/structs/fetch_logs_structs";


export const beaver_fetch_logs:BackendHandler = async(req:BackendRequest, res:Response) => {
  try {

    const api_data = assert_not_null<IApi>(req.api)

    // default values are set in the schema object validator {endpoint_beaver_log_fetch_schema_validator}
    const pagination = await validate_schema<endpoint_beaver_log_fetch_schema>(endpoint_beaver_log_fetch_schema_validator, req.query)

    if(pagination===undefined){
      res.status(400).json({message:"Invalid pagination parameters!"})
      return
    }
    
    const logs = await DBClient.instance.beaver_log.findMany({
      where: {
        paddock_api_id: api_data.id
      },
      orderBy: {
        created_at: "desc"
      },
      take: pagination.take,
      skip: pagination.skip,
    })

    res.json({logs:logs.reverse()})


  } catch (e) {
    console.error(e)
    res.status(500).json({message:"Unable to fetch logs!"})
  }
}