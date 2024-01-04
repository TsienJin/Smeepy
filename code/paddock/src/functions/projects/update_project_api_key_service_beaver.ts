import axios from "axios";


export default async function update_project_api_key_services_beaver(key_id:string, enable_beaver:boolean, smeepy_token:string):Promise<void> {

  const res = await axios.patch(`${import.meta.env.PUBLIC_BACKEND_URL}/admin/project/services/set-beaver`,
  {
    id: key_id,
    enable_beaver: enable_beaver
  },
  {
    headers: {
      smeepy: smeepy_token
    }
  })

}