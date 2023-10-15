import {twMerge} from "tailwind-merge";


export const CardTitle = (
  {
    title,
    css = ""
  }:{
    title:string,
    css?:string
  }
) => {
  return(
    <h1 className={twMerge(`
      text-4xl font-medium text-shadow
    `, css)}>
      {title}
    </h1>
  )
}