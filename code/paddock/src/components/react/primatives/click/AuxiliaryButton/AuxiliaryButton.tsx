import {twMerge} from "tailwind-merge";
import {useEffect} from "react";


export const AuxiliaryButton = (
  {
    icon="",
    children="",
    className="",
    outerClassName="",
    action=()=>{}
  }:{
    icon?:any,
    children?:any,
    className?:string,
    outerClassName?:string,
    action?:any,
  }
) => {

  const handleClick = () => {
    action()
    console.log(`[${children}] Button Pressed!`)
  }


  return(
    <button onClick={handleClick} className={twMerge(`w-fit`, outerClassName)}>
      <div className={twMerge(`
      cursor-pointer
      flex flex-row justify-center items-center 
      gap-x-2 px-3 py-1 
      transition-colors
      bg-shadow-100 md:hover:bg-shadow-200 text-shadow-700 whitespace-nowrap
      rounded
      border border-shadow-300
      `, className)}>
        {icon}
        {children}
      </div>
    </button>
  )
}