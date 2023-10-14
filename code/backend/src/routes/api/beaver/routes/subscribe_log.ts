import {BackendHandler, BackendRequest} from "@src/globals/types_and_all.types";
import {Response} from "express";


// TODO unable to implement currently (due to lack of technical know how)
export const beaver_subscribe_log:BackendHandler = (req:BackendRequest, res:Response) => {
  try {
    res.status(101).send("Subscribing to Beaver")
  } catch (e) {
    console.error(e)
    res.status(500).end()
  }
}