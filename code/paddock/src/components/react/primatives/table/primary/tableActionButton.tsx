import {twMerge} from "tailwind-merge";


export const TableActionButton = (
  {
    className="",
    children="",
    action=()=>{}
  }:{
    className?:string
    children?:any
    action?:any
  }
) => {

  const handleClick = () => {
    action()
  }


  return(
    <button onClick={handleClick}>
      <div className={twMerge(`
      transition-colors
      border border-shadow-300 p-1.5 rounded text-shadow-500
      md:hover:bg-shadow-100
      `, className)}>
        {children}
      </div>
    </button>
  )
}