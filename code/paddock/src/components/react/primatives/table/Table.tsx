import {twMerge} from "tailwind-merge";


export const Table = (
  {
    children="",
    className=""
  }:{
    children?:any,
    className?:string
  }
) => {

  return(
    <div className={`
    flex flex-row justify-start items-center gap-x-2 overflow-x-auto overflow-y-visible pb-2 mb-1
    -mx-3 lg:-mx-6
    px-3 lg:px-6
    `}>
      <table className={twMerge(className, `
      w-full
      border-separate
      border-spacing-0
      `)}>
        {children}
      </table>
    </div>
  )
}