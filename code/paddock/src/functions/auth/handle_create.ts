import axios from "axios";


export async function handle_create(email:string, password:string, fname:string, lname:string):Promise<string|undefined>{

  try{

    const res = await axios.post(`${import.meta.env.PUBLIC_BACKEND_URL}/admin/user/create`, {
     email:email,
     password:password,
     first_name:fname,
     last_name:lname
    })

    return res.headers['smeepy']

  } catch (e){
    console.error(e)
  }

}