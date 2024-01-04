import type {ApiKey} from "../../types/object.types.ts";
import axios from "axios";
import type {Get_project_api_keys} from "../../types/endpoint.types.ts";


export default async function get_project_api_keys(id:string, smeepy_token:string):Promise<ApiKey[]>{

  const res = await axios.post<Get_project_api_keys>(`${import.meta.env.PUBLIC_BACKEND_URL}/admin/project/get-keys-by-id`,
    {
      id
    },
    {
      headers:{
        smeepy: smeepy_token
      }
    })

  return res.data.keys
}