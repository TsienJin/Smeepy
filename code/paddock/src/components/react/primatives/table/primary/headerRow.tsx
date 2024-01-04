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
    <thead>
      <tr className={`
      `}>
        {children}
      </tr>
    </thead>
  )
}