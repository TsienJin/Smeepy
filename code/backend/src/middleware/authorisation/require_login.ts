import {Handler, NextFunction, Request, Response} from "express";
import {decodeJwt, generateJwt} from "@src/utils/jwt";


export default function require_login():Handler{
  return async(req:Request, res:Response, next:NextFunction) => {
    try{
      
      // fetch and decode current JWT
      const token = req.headers.authorization
      const usrJwt = decodeJwt(token||"")

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