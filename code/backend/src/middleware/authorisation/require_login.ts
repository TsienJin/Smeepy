import {Handler, NextFunction, Request, Response} from "express";
import {decodeJwt, generateJwt} from "@src/utils/jwt";
import {BackendHandler, BackendRequest} from "@src/globals/types_and_all.types";


export default function require_login():BackendHandler{
  return async(req:Request, res:Response, next:NextFunction) => {
    try{
      
      // fetch and decode current JWT
      const {smeepy} = req.headers

      console.log(smeepy)

      //@ts-ignore
      const usrJwt = decodeJwt(smeepy || "")

      // sets JWT attr in current req
      // @ts-ignore
      req['jwt'] = usrJwt


      // regenerate JWT to 'reset' the expiry on JWT token
      const newJwt = generateJwt({user_id:usrJwt.user_id})

      // sets new header
      res.setHeader("Authorization", newJwt)

      // proceed to next function
      next()

    } catch (e) {
      console.error(e)
      res.status(400).json({message:"Unable to verify user!"})
    }
  }
}