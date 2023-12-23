import {twMerge} from "tailwind-merge";


export const TabButtonContainer = (
  {
    children="",
    className=""
  }:{
    children?:any,
    className?:string
  }
) => {

  return(
    <div className={`
    overflow-x-auto
    pb-2 mb-1 -mx-3 lg:-mx-6 px-3 lg:px-6
    `}>
      <div className={twMerge(`
      flex flex-row justify-start items-center
      border w-fit mt-2 mb-1
      rounded
      divide-x divide-x-shadow-100
      `, className)}>
        {children}
      </div>
    </div>
  )
}


// flex flex-row justify-start items-center gap-x-2 overflow-x-auto pb-2 mb-1 -mx-3 lg:-mx-6 px-3 lg:px-6