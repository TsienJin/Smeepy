import type {Project_get_by_id} from "../../types/endpoint.types.ts";
import type {Project} from "../../types/object.types.ts";
import axios from "axios";


export default async function get_by_id(id:string, token:string): Promise<Project> {

  try{

    const res = await axios.post(`${import.meta.env.PUBLIC_BACKEND_URL}/admin/project/get-by-id`,
      {
        id:id
      },
      {
        headers:{
          smeepy:token
        }
      }
    )



    return res.data?.project

  } catch (e) {
    console.error(e)
    throw e
  }
}