import {twMerge} from "tailwind-merge";

/**
 * React Component for header cell
 * @param children {any}
 * @param max {boolean}
 * @param className {string} Class for styling child element
 * @constructor
 */
export const HeaderCell = (
  {
    children="",
    max=false,
    className=""
  }:{
    children?:any,
    max?:boolean,
    className?:string
  }
) => {

  return(
    <th className={`
    p-0 m-0 text-shadow-50 font-light text-xl text-left
    [&>div]:first:rounded-l
    [&>div]:last:rounded-r
    [&>div>div]:first:border-none
    [&>div>div]:first:pl-4
    [&>div>div]:last:pr-4
    `}>
      <div className={`
        ${max?"w-full":""}
        bg-shadow
        mb-4
        px-2 py-2
        min-w-fit
      `}>
        <div className={`
        border-l border-solid border-shadow-50 border-opacity-30
        px-2 py-2
        bg-shadow 
        overflow-hidden
        `}>
          <div className={twMerge(className)}>
            {children}
          </div>
        </div>
      </div>
    </th>
  )
}