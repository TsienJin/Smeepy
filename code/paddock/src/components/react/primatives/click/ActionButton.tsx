import {twMerge} from "tailwind-merge";
import {Loader2} from "lucide-react";


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

  return(
    <button type={type} onClick={handleClick} className={twMerge(`transition bg-shadow md:hover:bg-shadow-900 text-shadow-50 rounded w-full p-4`, className)}>
      <span className={`text-center flex flex-row justify-center items-center`}>{loading?<Loader2 className={`animate-spin`}/>:text}</span>
    </button>
  )
}