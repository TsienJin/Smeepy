import express, {Request, Response} from "express";
import {validate_api_key} from "@middleware/authentication/validate_api_key";
import {API_SERVICES} from "@src/globals/types_and_all.types";


export const beaver_router = express.Router()


/**
 * Testing the endpoint
 */
beaver_router.get("/", validate_api_key(API_SERVICES.Beaver), (req:Request, res:Response)=>{
  res.send("Beaver")
})
