import type {FormEventHandler} from "react";


export const ReactFormWrapper = (
  {
    children,
    action=()=>{}
  }:{
    children?:any,
    action?:any
  }
) => {


  const handleSubmit = (e:any) => {
    e.preventDefault()
    action()
  }

  return(
    <div className={`w-full flex flex-col justify-start items-stretch gap-y-6 max-w-full`}>
      <form onSubmit={handleSubmit} className={`w-full flex flex-col justify-start items-stretch gap-y-6 max-w-full`}>
        {children}
      </form>
    </div>
  )
}