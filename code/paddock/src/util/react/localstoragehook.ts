import {useEffect, useState} from "react";


interface setter{
  (val:string):void
}




export default function useLocalStorageHook(key:string, defaultValue:string=""):[string, setter]{

  if(typeof window === 'undefined'){
    return [defaultValue,(val:string)=>{}]
  }


  const [value, setValue] = useState<string>(window.localStorage.getItem(key)||defaultValue)


  const set:setter = (val:string) => {
    setValue(val)
    window.localStorage.setItem(key, val)
  }

  window.addEventListener("storage", ()=>{
    setValue(window.localStorage.getItem(key)||"")
  })


  return [value, set]

}