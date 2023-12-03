import useLocalStorageHook from "../../../util/react/localstoragehook.ts";
import {useEffect} from "react";


export const Logout_on_load = () => {

  const [token, setToken] = useLocalStorageHook("smeepy", "")

  useEffect(()=>{
    setToken("")
    // @ts-ignore
    window.location="/"
  },[])

  return(
    <></>
  )
}