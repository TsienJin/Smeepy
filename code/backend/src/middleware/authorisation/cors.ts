import {NextFunction, Request, Response} from "express";
import * as process from "process"


/**
 * Middleware to verify origin
 * @param origins
 */
export default function cors(...origins:string[]){
  return (req:Request, res:Response, next:NextFunction)=>{
    const origin = req.headers.origin

    if(origin!=undefined && !origins.includes("") && origins.includes(origin)){
      res.setHeader("X-Frame-Options", `DENY`)
      next()
    } else {
      res.status(400).json({error:"CORS violation error"})
    }

  }
}