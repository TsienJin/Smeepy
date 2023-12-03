import {twMerge} from "tailwind-merge";


export const AuxiliaryButtonContainer = (
  {
    children,
    className
  }:{
    children?:any,
    className?:string
  }
) => {


  return(
    <div className={twMerge(`
    flex flex-row justify-start items-center gap-x-2 overflow-x-auto pb-2 mb-1
    -mx-3 lg:-mx-6
    px-3 lg:px-6
    `, className)}>
      {children}
    </div>
  )
}