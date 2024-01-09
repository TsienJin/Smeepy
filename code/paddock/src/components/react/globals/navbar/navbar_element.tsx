import {useState} from "react";


export const ReactNavbarElement = (
  {
    label,
    link,
    children,
    expanded=true,
    callback=()=>{}
  }:{
    label:string,
    link:string,
    children?:any,
    expanded?:boolean,
    callback?:any
  }
) => {

  const handleClick = () => {
    callback()
  }

  return(
    <a href={link} target={"_self"} onClick={handleClick} className={`w-full`} data-astro-prefetch="load">
      <div className={`
      transition-all
      flex flex-row p-[10px] rounded bg-shadow-900 md:hover:bg-shadow-800 text-shadow-400 w-full
      `}>
        <div className={`flex flex-row justify-start items-center text-center w-full`}>
          {children}
          <div className={`overflow-hidden text-sm font-normal flex flex-row justify-center items-start ${expanded?"":"max-w-0"}`}>
            <span className={`pl-2 ml-2 border-l border-shadow-400 h-full`}>{label}</span>
          </div>
        </div>
      </div>
    </a>
  )
}