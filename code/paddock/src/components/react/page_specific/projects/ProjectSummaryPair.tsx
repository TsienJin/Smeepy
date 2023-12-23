




export const ProjectSummaryPair = (
  {
    label="",
    children=""
  }:{
    label?:any
    children?:any
  }
) => {


  return(
    <div className={`
    flex flex-row gap-x-2
    `}>
      <span className={`
      font-mono text-md text-shadow opacity-90
      `}>
        {children}
      </span>
      <span className={`
      font-mono text-shadow opacity-70
      whitespace-nowrap
      `}>
        {label}
      </span>
    </div>
  )
}