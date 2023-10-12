import {Handler, NextFunction, Request, Response} from "express";
import {API_SERVICES} from "@src/globals/types_and_all.types";
import assert_not_null from "@src/utils/assert_not_null";
import {extract_val_from_auth_header_string} from "@src/utils/auth_header";
import DBClient from "@src/objects/db";








export const validate_api_key = (allowed_service:API_SERVICES):Handler => {
  return async (req:Request, res:Response, next:NextFunction) => {

    const reject_api = (status:number=401, reason:string="API key is not allowed with this product") => {
      res.status(status).json({message:reason})
      return
    }

    try {

      // gets key from header
      const key = extract_val_from_auth_header_string(assert_not_null<string>(req.headers.authorization))

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