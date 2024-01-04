import {useEffect, useState} from "react";


export const ReactToggleSwitch = (
  {
    initState=false,
    hoist=()=>{},
    onChange=()=>{}
  }:{
    initState?:boolean,
    hoist?:any,
    onChange?:any
  }
) => {


  const [isMounted, setIsMounted] = useState<boolean>(false)
  const[toggle, setToggle] = useState<boolean>(initState)

  const handleClick = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    if(isMounted){
      onChange(toggle)
      hoist(toggle)
    }
  }, [toggle]);

  useEffect(() => {
    setIsMounted(true)
  }, []);

  return(
    <button className={`rounded-full`} onClick={handleClick}>
      <div className={`
      transition-colors
      overflow-hidden
      rounded-full p-1
      w-14 h-7
      shadow-inner
      relative
      ${toggle?"bg-shadow":"bg-shadow-100"}
      `}>
        <div className={`
        transition-all
        absolute top-1
        ${toggle?"translate-x-7":"translate-x-0"}
        bg-white rounded-full w-5 h-5 
        shadow-lg
        `}/>
      </div>
    </button>
  )
}