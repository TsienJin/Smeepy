import {twMerge} from "tailwind-merge";


export const TableRow = (
  {
    children="",
    className=""
  }:{
    children?:any
    className?:string
  }
) => {

  return(
    <tr className={twMerge(`
    
    `, className)}>
      {children}
    </tr>
  )
}