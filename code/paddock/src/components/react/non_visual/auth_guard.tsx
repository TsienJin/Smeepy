import replaceLocal from "../../../functions/util/redirect_local.ts";
import axios from "axios";
import useLocalStorageHook from "../../../util/react/localstoragehook.ts";
import {useEffect} from "react";


export const ReactAuthGuard = () => {


  const [token, setToken] = useLocalStorageHook("smeepy", "")

  if(!token){
    replaceLocal("/")
  } else {
    axios.get(`${import.meta.env.PUBLIC_BACKEND_URL}/admin/user/validate`, {
      headers: {
        smeepy: token
      }
    })
      .then(()=>{})
      .catch(()=>{
        setToken("")
        replaceLocal("/")
      })
  }

  useEffect(()=>{console.log(token)},[token])

  return(<></>)
}