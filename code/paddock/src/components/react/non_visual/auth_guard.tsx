import {useLocalStorage} from "usehooks-ts";
import replaceLocal from "../../../functions/util/replace_local.ts";
import axios from "axios";


export const ReactAuthGuard = () => {


  const [token, setToken] = useLocalStorage("smeepy", "")

  if(!token){
    replaceLocal("/")
  } else {
    axios.get(`${import.meta.env.PUBLIC_BACKEND_URL}/admin/user/validate`, {
      headers: {
        smeepy: token
      }
    })
      .then()
      .catch(()=>{
        setToken("")
        replaceLocal("/")
      })
  }

  return(<></>)
}