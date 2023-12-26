



export const ModalHeader = (
  {
    children=""
  }:{
    children?:any
  }
) => {
  return(
    <h2 className={`font-medium text-2xl w-full text-left mb-4`}>{children}</h2>
  )
}