import {BackendHandler, BackendRequest} from "@src/globals/types_and_all.types";
import {Response} from "express";
import console from "console";
import assert_not_null from "@src/utils/assert_not_null";
import {decodeJwt} from "@src/utils/jwt";


export const validate_session:BackendHandler = async (req:BackendRequest, res:Response) => {

  try{
    const { smeepy } = req.headers
    const smeepyToken = assert_not_null<string>(smeepy)
    const jwt = decodeJwt(smeepyToken)

    res.status(200).send("OK!")
  } catch (e) {
    console.log(e)
    res.status(400).json({message:"Session no longer valid!"})
  }

}