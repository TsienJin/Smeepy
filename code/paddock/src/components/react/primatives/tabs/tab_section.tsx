



export const TabSection = (
  {
    label="",
    current="",
    children=""
  }:{
    label:string,
    current?:string,
    children?:any
  }
) => {

  return(
    <section className={`
    w-full
    ${current===label?"":"opacity-0 h-0"}
    `}>
      <span>{children || label}</span>
    </section>
  )
}