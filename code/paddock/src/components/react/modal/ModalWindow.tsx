import {useEffect, useState} from "react";
import {CrossIcon, XIcon} from "lucide-react";


export const ModalWindow = (
  {
    children="",
    open=false,
    onClose=()=>{},
    closeSemaphore=""
  }:{
    children?:any
    open?:boolean
    onClose?:any
    closeSemaphore?:any
  }
) => {

  const [semLatch, setSemLatch] = useState<any>(closeSemaphore)
  const [isOpen, setOpen] = useState<boolean>(open)

  const handleClose = () => {
    setOpen(false)
    onClose()
  }

  useEffect(() => {
    setOpen(open)
  }, [open])

  useEffect(() => {
    if(closeSemaphore !== semLatch){
      setOpen(false)
      setSemLatch(closeSemaphore)
    }
  }, [closeSemaphore]);

  return(
    <dialog className={`
    fixed top-0 left-0 right-0 bottom-0 z-50
    max-w-[100dvw]
    w-[100dvw] h-[100dvh] bg-shadow-500 bg-opacity-25 backdrop-blur
    p-3 lg:p-3
    flex flex-col justify-start md:justify-center items-center
    transition-opacity
    duration-200
    ${isOpen?"opacity-100":"opacity-0 pointer-events-none"}
    `}>
      <div className={`
      relative
      bg-white p-6 rounded shadow
      min-w-full
      min-h-fit
      lg:min-w-[33dvw]
      lg:min-h-[33dvh]
      flex flex-col justify-center items-center
      `}>
        <button onClick={handleClose} tabIndex={0} className={`transition opacity-50 md:hover:opacity-80 absolute top-1 right-1`} >
          <XIcon />
        </button>
        {children}
      </div>
    </dialog>
  )
}