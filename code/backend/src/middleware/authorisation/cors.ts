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
      res.setHeader("Access-Control-Allow-Origin", `${process.env.PADDOCK_HOST}`)
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, smeepy')
      res.setHeader('Access-Control-Expose-Headers', 'smeepy')
      res.setHeader('Access-Control-Allow-Credentials', 'true')
      next()
    } else {
      res.status(400).json({error:"CORS violation error"})
    }

  }
}