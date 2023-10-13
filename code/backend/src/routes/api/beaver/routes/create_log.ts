import {BackendHandler, BackendRequest, IApi} from "@src/globals/types_and_all.types";
import {Response} from "express";
import assert_not_null from "@src/utils/assert_not_null";
import {validate_schema} from "@src/schema/validate_schema";
import {
  endpoint_beaver_log_create_schema,
  endpoint_beaver_log_create_schema_validator
} from "@routes/api/beaver/structs/create_log_struct";
import DBClient from "@src/objects/db";
import RedisClient from "@src/objects/redis_instance";


/**
 * Endpoint to receive log
 * @param req {BackendRequest}
 * @param res {Response}
 */
export const beaver_create_log:BackendHandler = async (req:BackendRequest, res:Response) => {

  try {

    const api_info = assert_not_null<IApi>(req.api)
    const data = await validate_schema<endpoint_beaver_log_create_schema>(endpoint_beaver_log_create_schema_validator, req.body)
    const solid_data = assert_not_null<endpoint_beaver_log_create_schema>(data)

    // creates the log in the DB to persist
    const newLog = await DBClient.instance.beaver_log.create({
      data: {
        label: solid_data.label,
        log: solid_data.log,
        level: solid_data.level||"INFO",
        paddock_api_id: api_info.id
      }
    })

    // pushes data to the redis channel
    await RedisClient.publish(`Beaver:${api_info.key}`, `[${newLog.created_at}] [${solid_data.level||"INFO"}][${solid_data.label}] | ${solid_data.log}`)

    res.send("OK!")

  } catch (e) {
    console.error(e)
    res.status(500).json({message: "An oopsie occurred while saving your log!"})
  }

}