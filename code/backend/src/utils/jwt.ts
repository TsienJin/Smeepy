import jwt from 'jsonwebtoken'
import * as process from 'process'

import {IJwt} from "@src/utils/jwt.types";


/**
 * Method to generate a JWT from IJwt
 * @param vals {IJwt}
 * @return string {jwt}
 */
export function generateJwt(vals:IJwt):string {

  // ensure fields are present
  if(vals.user_id===""){
    throw "Missing user_id"
  }


  // defaults expiry to 24hrs if not passed in
  return jwt.sign(vals, process.env.JWT_SECRET||"", {expiresIn:vals?.expiresIn||60*60*24})
}

/**
 * Method to decode and verify a JWT from a string
 * @param jwt_string
 * @throws Error -- that I'm not too sure what types there are https://www.npmjs.com/package/jsonwebtoken
 * @return IJwt
 */
export function decodeJwt(jwt_string:string|undefined):IJwt{

  if(jwt_string===undefined||jwt_string===""){
    throw new Error("JWT was not passed in!")
  }

  return jwt.verify(jwt_string.replace("Bearer ", ""), process.env.JWT_SECRET||"") as unknown as IJwt
}