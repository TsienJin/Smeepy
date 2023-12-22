import {useEffect, useState} from "react";
import {CrossIcon, XIcon} from "lucide-react";


export const ModalWindow = (
  {
    children="",
    onClose=()=>{},
    closeSemaphore=""
  }:{
    children?:any
    onClose?:any
    closeSemaphore?:any
  }
) => {

  const [semLatch, setSemLatch] = useState<any>(closeSemaphore)
  const [open, setOpen] = useState<boolean>(false)

  const handleClose = () => {
    setOpen(false)
    onClose()
  }

  useEffect(() => {
    if(children){
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [children]);

  useEffect(() => {
    if(closeSemaphore !== semLatch){
      setOpen(false)
      setSemLatch(closeSemaphore)
    }
  }, [closeSemaphore]);

  return(
    <dialog className={`
    absolute top-0 left-0 right-0 bottom-0 z-50
    w-[100dvw] h-[100dvh] bg-shadow-500 bg-opacity-25 backdrop-blur
    p-3 lg:p-3
    flex flex-col justify-center items-center
    transition-opacity
    delay-200
    ${open?"opacity-100":"opacity-0"}
    `}>
      <div className={`
      relative
      bg-white p-3 rounded shadow
      min-w-full
      min-h-full
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