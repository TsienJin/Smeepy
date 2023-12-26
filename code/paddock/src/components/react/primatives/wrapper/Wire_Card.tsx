import {twMerge} from "tailwind-merge";


export const ReactWireCard = (
  {
    children,
    className=""
  }:{
    children?:any,
    className?:string
  }
) => {
  return(
    <div className={twMerge(`
    border border-shadow-100 rounded-xl p-[24px] flex flex-col max-w-full
    `, className)}>
      {children}
    </div>
  )
}