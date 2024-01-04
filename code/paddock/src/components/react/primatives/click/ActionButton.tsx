import {twMerge} from "tailwind-merge";
import {Loader2} from "lucide-react";
import React, {useEffect} from "react";


export const ReactActionButton = (
  {
    text,
    action=()=>{},
    type="button",
    loading=false,
    className=""
  }:{
    text:string,
    action?:any,
    type?:"button"|"submit"|"reset",
    loading?:boolean,
    className?:string
  }
) => {


  const handleClick = (e:any) => {
    e.preventDefault()
    if(!loading){
      action()
    }
  }

  const handleKeyboardSubmit = (e:KeyboardEvent):any => {
    if(!loading && e.isTrusted && e.key==="Enter" && (e.metaKey || e.ctrlKey)){
      action()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyboardSubmit, false)

    return(()=>{
      window.removeEventListener("keydown", handleKeyboardSubmit, false)
    })
  }, [loading, action]);

  return(
    <button type={type} onClick={handleClick} className={twMerge(`transition bg-shadow md:hover:bg-shadow-900 text-shadow-50 rounded w-full p-4`, className)}>
      <span className={`text-center flex flex-row justify-center items-center`}>{loading?<Loader2 className={`animate-spin`}/>:text}</span>
    </button>
  )
}