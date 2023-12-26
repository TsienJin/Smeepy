import {useEffect, useState} from "react";
import {EyeIcon, EyeOffIcon} from "lucide-react";


export const ReactSensitiveCopyField = (
  {
    label,
    value,
    viewable=false
  }:{
    label:string,
    value:string,
    viewable?:boolean,
  }
) => {

  const [isViewable, setIsViewable] = useState<boolean>(viewable)

  const toggleViewable = () => {
    setIsViewable(!isViewable)
  }

  useEffect(() => {
    setIsViewable(viewable)
  }, [viewable]);


  return(
    <div className={`
    flex flex-row justify-start items-stretch gap-x-1
    `}>
      <div className={`
      flex flex-row justify-start items-start gap-y-1
      max-w-full lg:w-auto grow
      rounded
      border border-shadow-300
      text-shadow
      overflow-hidden
      `}>
        <span className={`
        border-r border-shadow-300
        pl-4 py-3 pr-3
         bg-shadow-50
        `}>
          <span className={`font-mono opacity-70`}>
            {label}
          </span>
        </span>
        <input type={isViewable?"text":"password"} disabled={true} defaultValue={value} className={`
        w-full h-full
        font-mono opacity-80
        py-3 pl-2 pr-2
        `}/>
      </div>
      <button onClick={toggleViewable}>
        <div className={`
        border border-shadow-300 rounded h-full
        flex flex-col justify-center items-center
        px-3
        text-shadow
        transition
        md:hover:bg-shadow-50
        `}>
          {isViewable?
            <EyeOffIcon size={24} className={`opacity-70`}/>:
            <EyeIcon size={24} className={`opacity-70`} />
          }

        </div>
      </button>
    </div>
  )
}