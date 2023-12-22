import {twMerge} from "tailwind-merge";


export const LoadingRect = (
  {
    className="",
    children=""
  }:{
    className?:string,
    children?:any
  }
) => {

  return(
    <div className={twMerge(className, `
    w-full
    h-full
    rounded bg-blend-color bg-shadow-200 opacity-10
    animate-pulse
    `)}>
      <span className={`opacity-0 select-none w-fit`}>{children?children:"Loading"}</span>
    </div>
  )

}