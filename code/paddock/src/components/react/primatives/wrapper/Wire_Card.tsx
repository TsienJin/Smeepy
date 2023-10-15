



export const ReactWireCard = (
  {children}:{children?:any}
) => {
  return(
    <div className="border border-shadow-100 rounded-xl p-[24px] flex flex-col max-w-full">
      {children}
    </div>
  )
}