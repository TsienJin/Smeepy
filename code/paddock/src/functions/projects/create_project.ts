import axios from "axios";


export default async function create_project(name:string, description:string, smeepy_token:string) {

  const res = await axios.post(`${import.meta.env.PUBLIC_BACKEND_URL}/admin/project/create`,
    {
      name: name,
      description: description
    },
    {
      headers: {
        smeepy: smeepy_token
      }
    })

  return res?.data?.project?.id

}