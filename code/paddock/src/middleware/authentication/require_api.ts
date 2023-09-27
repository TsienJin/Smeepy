import {NextFunction, Request, Response} from "express";


export default function require_api(req:Request, res:Response, next:NextFunction){
  if(req.headers.authorization){
    console.log(req.headers.authorization)
    next()
  } else {
    res.status(401).json({error:"Not authorised"})
  }
}