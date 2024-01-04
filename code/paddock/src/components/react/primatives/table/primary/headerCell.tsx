import {twMerge} from "tailwind-merge";

/**
 * React Component for header cell
 * @param children {any}
 * @param max {boolean}
 * @param center {boolean}
 * @param className {string} Class for styling child element
 * @param thClassName {string} Class for parent th element
 * @constructor
 */
export const HeaderCell = (
  {
    children="",
    max=false,
    center=false,
    className="",
    thClassName=""
  }:{
    children?:any,
    max?:boolean,
    center?:boolean,
    className?:string,
    thClassName?:string
  }
) => {

  return(
    <th className={twMerge(`
    p-0 m-0 text-shadow-50 font-light text-xl
    [&>div]:first:rounded-l
    [&>div]:last:rounded-r
    [&>div>div]:first:border-none
    [&>div>div]:first:pl-4
    ${center?"text-center":"text-left"}
    ${center?"[&>div>div]:last:pl-4":""}
    ${max?"w-full":""}
    `, thClassName)}>
      <div className={`
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
        w-full
        `}>
          <div className={twMerge(className)}>
            {children}
          </div>
        </div>
      </div>
    </th>
  )
}