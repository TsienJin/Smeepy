import {twMerge} from "tailwind-merge";


export const TableBody = (
  {
    children="",
    className=""
  }:{
    children?:any
    className?:string
  }
) => {

  return(
    <tbody className={twMerge(`
    [&>tr:first-child>td:first-child]:rounded-tl
    [&>tr:first-child>td:last-child]:rounded-tr
    [&>tr:last-child>td:last-child]:rounded-br
    [&>tr:last-child>td:first-child]:rounded-bl
    
    [&>tr:first-child>td]:border-t
    [&>tr:last-child>td]:border-b
    [&>tr>td:first-child]:border-l
    [&>tr>td:last-child]:border-r
    `, className)}>
      {children}
    </tbody>
  )
}

// [&>tr:last-child>td:last-child]:rounded-br
// [&>tr:last-child>td:first-child]:rounded-bl
// [&>tr:first-child>td:last-child]:rounded-tr
// [&>tr:first-child>td:first-child]:rounded-tl