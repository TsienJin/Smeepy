import axios from "axios";


export default async function delete_project_api_key(id:string, smeepy_token:string):Promise<void> {

  const res = await axios.delete(`${import.meta.env.PUBLIC_BACKEND_URL}/admin/project/delete-key-by-id`, {
    data: {
      id
    },
    headers: {
      smeepy: smeepy_token
    }
  })

}