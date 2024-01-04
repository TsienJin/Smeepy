import {twMerge} from "tailwind-merge";


export const CodeInline = (
  {
    className="",
    children=""
  }:{
    className?:string
    children?:any
  }
) => {

  return(
    <span className={twMerge(`
    rounded bg-shadow-100 text-shadow-700 font-mono px-1 py-0.5
    `, className)}>
      {children}
    </span>
  )
}