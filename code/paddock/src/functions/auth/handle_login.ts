import axios from "axios";
import Cookies from "js-cookie";
import {useLocalStorage} from "usehooks-ts";


export async function handle_login(email:string, password:string):Promise<string|undefined> {

  try{
    const res = await axios.post(`${import.meta.env.PUBLIC_BACKEND_URL}/admin/user/login`,{
      email:email,
      password:password
    })

    return res.headers['smeepy']

  } catch (e) {
    console.error(e)
  }
}