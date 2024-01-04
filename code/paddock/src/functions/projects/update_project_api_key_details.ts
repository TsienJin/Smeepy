import axios from "axios";


export default async function update_project_api_key_details(id:string, label:string, description:string, smeepy_token:string): Promise<void> {

  const res = await axios.put(`${import.meta.env.PUBLIC_BACKEND_URL}/admin/project/update-key-by-id`,
    {
      id, label, description
    },
    {
      headers: {
        smeepy: smeepy_token
      }
    })

}
