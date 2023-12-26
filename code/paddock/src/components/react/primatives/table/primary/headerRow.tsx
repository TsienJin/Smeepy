import {twMerge} from "tailwind-merge";


export const HeaderRow = (
  {
    children="",
    className=""
  }:{
    children?:any
    className?:string
  }
) => {


  return(
    <tr className={`
    `}>
      {children}
    </tr>
  )
}