import {twMerge} from "tailwind-merge";
import {HeaderRow} from "./headerRow.tsx";
import {HeaderCell} from "./headerCell.tsx";
import {LoadingRect} from "../../../../global_components/loading/LoadingRect.tsx";
import {TableBody} from "./tableBody.tsx";
import {TableRow} from "./tableRow.tsx";
import {TableCell} from "./tableCell.tsx";
import React from "react";




const LoadingRow = () => {
  return(
      <TableRow>
        <TableCell>
          <LoadingRect className={`w-fit`}>
              <span className={`font-semibold text-lg w-full flex flex-row justify-start items-center gap-1`}>
                  Proj name
              </span>
          </LoadingRect>
          <LoadingRect>
            <p>Lorem ipsum</p>
          </LoadingRect>
        </TableCell>
      </TableRow>
  )
}


/**
 * Table component to wrap table and handle loading table.
 * This component will also render `emptyChildren` when `displayEmptyChild` === true
 * @param children
 * @param emptyChildren
 * @param displayEmptyChild
 * @param className
 * @param loading
 * @constructor
 */
export const Table = (
  {
    children="",
    emptyChildren="",
    displayEmptyChild=false,
    className="",
    loading=false
  }:{
    children?:any,
    emptyChildren?:any,
    displayEmptyChild?:boolean
    className?:string,
    loading?:boolean
  }
) => {



  return(
    <div className={`
    flex flex-row justify-start items-center gap-x-2 overflow-x-auto overflow-y-visible pb-2 mb-1
    -mx-3 lg:-mx-6
    px-3 lg:px-6
    `}>
      {
        displayEmptyChild && emptyChildren &&
        <div className={`
        w-full h-full
        rounded p-4
        border border-dashed border-shadow-300
        flex flex-col justify-center items-center
        min-h-[20vh]
        `}>
          {emptyChildren}
        </div>
      }
      {
        !displayEmptyChild && !loading &&
        <table className={twMerge(className, `
        w-full transition-all
        border-separate
        border-spacing-0
        `)}>
        {children}
        </table>
      }

      {
        !displayEmptyChild && loading &&
        <table className={twMerge(className, `
          transition-all 
          w-full
          border-separate
          border-spacing-0
          `)}>
            <HeaderRow>
                <HeaderCell>
                    <LoadingRect />
                </HeaderCell>
            </HeaderRow>
            <TableBody>
              <LoadingRow />
              <LoadingRow />
              <LoadingRow />
              <LoadingRow />
              <LoadingRow />
            </TableBody>
        </table>
      }
    </div>
  )
}