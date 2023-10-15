import {Handler, NextFunction, Request, Response} from "express";
import {API_SERVICES, BackendRequest} from "@src/globals/types_and_all.types";
import assert_not_null from "@src/utils/assert_not_null";
import {extract_val_from_auth_header_string} from "@src/utils/auth_header";
import DBClient from "@src/objects/db";
import rate_limit_valid from "@middleware/helpers/rate_limit";


/**
 * Middleware to
 * @param allowed_service {API_SERVICES}
 * @param max_rate {number} maximum API calls per minute. Defaults to 600
 */
export const validate_api_key = (allowed_service:API_SERVICES, max_rate:number=600):Handler => {
  return async (req:BackendRequest, res:Response, next:NextFunction) => {

    const reject_api = (status:number=401, reason:string="API key is not allowed with this product") => {
      res.status(status).json({message:reason})
      return
    }

    try {

      // gets key from header "Smeepy"
      const key = assert_not_null<string>(req.get("Smeepy"))

      // checks for key in database
      const key_record = await DBClient.instance.paddock_api_key.findFirst({
        where: {
          key: key
        },
        include: {
          paddock_api_key_services: true
        }
      })


      // ensures that the key is found
      if(!key_record){
        res.status(401).json({message:"Unable to verify API key"})
        return
      }

      // sets API key for BackendHandler
      // @ts-ignore
      req.api = key_record

      // checks if rate limit has been reached
      if(!await rate_limit_valid(key, max_rate)){
        res.status(429).json({message:"Rate limit exceeded"})
        return
      }

      // validates if service is allowed for API key
      switch (allowed_service) {
        case API_SERVICES.Beaver: {if(key_record.paddock_api_key_services.enable_beaver===true){return next()}return reject_api()}
        default: return reject_api()
      }


    } catch (e) {
      console.error(e)
      res.status(500).json({message:"Unable to authenticate API key"})
      return
    }
  }
}