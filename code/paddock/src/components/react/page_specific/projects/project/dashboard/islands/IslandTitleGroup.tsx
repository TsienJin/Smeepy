import {twMerge} from "tailwind-merge";

/**
 * Component to render title group for dashboard islands.
 * @param title {string}
 * @param children {any} Description
 * @param childrenClassName {string} Classes for description
 * @constructor
 */
export const IslandTitleGroup = (
  {
    title="Island Title",
    children="",
    childrenClassName=""
  }:{
    title?:string,
    children?:any,
    childrenClassName?:string
  }
) => {

  return(
    <div className={`
    flex flex-col w-full
    mb-2
    `}>
      <span className={`font-medium text-shadow text-2xl`}>{title}</span>
      <p className={twMerge(`
      flex flex-col w-full
      max-w-prose font-light
      opacity-70
      gap-y-1
      `, childrenClassName)}>
        {children}
      </p>
    </div>
  )
}