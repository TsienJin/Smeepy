import axios from "axios";
import type {Create_api_key} from "../../types/endpoint.types.ts";
import type {ApiKeyCredentials} from "../../types/object.types.ts";


export default async function create_api_key(id:string, name:string, description:string, token:string):Promise<ApiKeyCredentials>{

  const res = await axios.post<Create_api_key>(`${import.meta.env.PUBLIC_BACKEND_URL}/admin/project/create-api-key`,
      {
        project_id:id,
        api_label:name,
        api_description:description
      },
      {
        headers: {
          smeepy: token,
        }
      }
    )

  return res.data.api_key



}