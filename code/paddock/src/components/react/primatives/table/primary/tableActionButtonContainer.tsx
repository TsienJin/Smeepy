import {twMerge} from "tailwind-merge";


export const TableActionButtonContainer = (
  {
    className="",
    children=""
  }:{
    className?:string
    children?:any
  }
) => {

  return(
    <div className={twMerge(`
    flex flex-row justify-center items-center flex-nowrap gap-1
    `, className)}>
      {children}
    </div>
  )
}