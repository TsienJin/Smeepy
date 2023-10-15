import express, {Request, Response} from "express";
import {validate_api_key} from "@middleware/authentication/validate_api_key";
import {API_SERVICES} from "@src/globals/types_and_all.types";
import {beaver_create_log} from "@src/routes/api/beaver/routes/create_log";
import {beaver_fetch_logs} from "@src/routes/api/beaver/routes/fetch_logs";


export const beaver_router = express.Router()
beaver_router.use(validate_api_key(API_SERVICES.Beaver))
beaver_router.use(express.json())
beaver_router.use(express.raw())



/**
 * Testing the endpoint
 */
beaver_router.get("/",(req:Request, res:Response)=>{
  res.send("Beaver")
})


/**
 * Endpoint to CREATE LOG
 */
beaver_router.post("/log", beaver_create_log)

/**
 * Endpoint to FETCH LOGS
 */
beaver_router.get("/fetch", beaver_fetch_logs)


/**
 * Endpoint to SUBSCRIBE
 * Connection will be upgraded to a socket connection.
 */
// beaver_router.get("/subscribe", beaver_subscribe_log)