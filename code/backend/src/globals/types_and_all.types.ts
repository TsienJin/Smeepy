import {Handler, Request} from "express";
import {IJwt} from "@src/utils/jwt.types";
import {NextFunction, Response} from "express-serve-static-core";
import {Prisma} from "@prisma/client";


/**
 * ENUM for available services for API products
 */
export enum API_SERVICES {
  Beaver="Beaver",
}


/**
 * Type for IApi
 * Reference: https://www.prisma.io/docs/concepts/components/prisma-client/advanced-type-safety/operating-against-partial-structures-of-model-types
 */
const __api_with_services = Prisma.validator<Prisma.paddock_api_keyDefaultArgs>()({include:{paddock_api_key_services:true}})
export type IApi = Prisma.paddock_api_keyGetPayload<typeof __api_with_services>


/**
 * Backend Request object incorporating JWT items and API key to be easily accessible from the backend.
 */
export interface BackendRequest extends Request {
  jwt?: IJwt,
  api?: IApi
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



