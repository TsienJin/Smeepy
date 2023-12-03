import {twMerge} from "tailwind-merge";


/**
 * React Component to render each cell element for the table
 * @param children {any}
 * @param className {string} Handles styling for child elements and not the cell styling
 * @constructor
 */
export const TableCell = (
  {
    children="",
    className=""
  }:{
    children?:any
    className?:string
  }
) => {

  return(
    <td className={twMerge(`
    text-shadow text-normal font-light text-left
    px-2 py-2
    [&>div:first-child]:first:pl-4
    [&>div:last-child]:last:pr-4
    [&>div>div]:first:pl-0
    [&>div>div]:first:border-none
    border-shadow-100 border-b
    `, className)}>
      <div className={`
      `}>
        <div className={`
        border-l border-dashed border-shadow-300 h-full
        `}>
          <div className={twMerge(className, `px-2 py-2 h-full`)}>
            {children}
          </div>
        </div>
      </div>
    </td>
  )
}
