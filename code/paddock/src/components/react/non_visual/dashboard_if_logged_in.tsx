import {useLocalStorage} from "usehooks-ts";
import axios from "axios";
import replaceLocal from "../../../functions/util/redirect_local.ts";


export const Dashboard_if_logged_in = () => {

  const [token, setToken] = useLocalStorage("smeepy", "")

  if(token){
    axios.get(`${import.meta.env.PUBLIC_BACKEND_URL}/admin/user/validate`, {
      headers:{
        smeepy: token
      }
    })
      .then(()=>{replaceLocal("/dash")})
      .catch(()=>{setToken("")})
  }


  return(<></>)
}