import axios from "axios";
import replaceLocal from "../../../functions/util/redirect_local.ts";
import useLocalStorageHook from "../../../util/react/localstoragehook.ts";


export const Dashboard_if_logged_in = () => {

  const [token, setToken] = useLocalStorageHook("smeepy", "")

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