import express, {Request, Response} from "express";
import require_api from "@middleware/authentication/require_api";


export const beaver_router = express.Router()


/**
 * Testing the endpoint
 */
beaver_router.get("/", require_api, (req:Request, res:Response)=>{
  res.send("Beaver")
})
