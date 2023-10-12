import {Handler, Request} from "express";
import {IJwt} from "@src/utils/jwt.types";
import {NextFunction, Response} from "express-serve-static-core";


export enum API_SERVICES {
  Beaver="Beaver",
}


/**
 * Backend Request object incorporating JWT items and API key to be easily accessible from the backend.
 */
export interface BackendRequest extends Request {
  jwt?: IJwt,
  api?: string
}


/**
 * Updated types to include Backend Request
 */
export interface BackendHandler extends Handler {
  (req: BackendRequest,
   res: Response,
   next: NextFunction)
  :void
}



