import type {FormEventHandler} from "react";
import {twMerge} from "tailwind-merge";


export const ReactFormWrapper = (
  {
    children,
    className="",
    action=()=>{}
  }:{
    children?:any,
    className?:string
    action?:any
  }
) => {


  const handleSubmit = (e:any) => {
    e.preventDefault()
    action()
  }

  return(
    <div className={twMerge(`w-full flex flex-col justify-start items-stretch gap-y-6 max-w-full`)}>
      <form onSubmit={handleSubmit} className={twMerge(`w-full flex flex-col justify-start items-stretch gap-y-6 max-w-full`, className)}>
        {children}
      </form>
    </div>
  )
}