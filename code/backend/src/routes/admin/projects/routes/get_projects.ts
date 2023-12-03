import {Handler, Request, Response} from "express";
import {decodeJwt} from "@src/utils/jwt";
import DBClient from "@src/objects/db";
import {BackendHandler, BackendRequest} from "@src/globals/types_and_all.types";
import console from "console";


export const get_projects:BackendHandler = async (req:BackendRequest, res:Response) => {
  try{

    //@ts-ignore
    const userJwt = decodeJwt(req.headers.smeepy||"")


    const projects = await DBClient.instance.paddock_project.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        paddock_user_creator: {
          select: {
            first_name: true,
            last_name: true
          }
        }
      },
      where: {
        paddock_user_creator_Id: {
          equals: userJwt.user_id
        }
      }
    })

    res.status(200).json({message:"Ok!", projects:projects})

  } catch (e) {
    console.error(e)
    res.status(500).json({message:"Unable to fetch projects!"})
  }
}