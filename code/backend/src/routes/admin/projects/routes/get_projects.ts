import {Handler, Request, Response} from "express";
import {decodeJwt} from "@src/utils/jwt";
import DBClient from "@src/objects/db";


export const get_projects:Handler = async (req:Request, res:Response) => {
  try{

    const userJwt = decodeJwt(req.headers.authorization||"")

    const projects = await DBClient.instance.paddock_project.findMany({
      select: {
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