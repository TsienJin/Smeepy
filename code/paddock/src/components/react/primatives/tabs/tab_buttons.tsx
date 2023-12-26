import type {TabLabels} from "./tab_labels.types.ts";
import {useEffect, useState} from "react";


export const TabButton = (
  {
    label="Tab",
    current="None_Active",
    updateCurrent=()=>{}
  }:{
    label?:string,
    current?:string,
    updateCurrent?:any
  }
) => {

  const [currentTab, setCurrentTab] = useState<string>(current)

  const handleSelectTab = () => {
    updateCurrent(label)
  }

  useEffect(() => {
    setCurrentTab(current)
  }, [current]);


  return(
    <button onClick={handleSelectTab}>
      <div className={`
      transition-all
      p-2
      relative
      ${label==current?"":"bg-shadow-50"}     
      `}>
        <span className={`
        transition-all whitespace-nowrap
        ${label==current?"":"opacity-50"}     
        `}>{label}</span>
        <div className={`
        absolute
        bottom-0 left-0 right-0
        `}>
          <div className={`
          transition-all duration-300
          w-full bg-shadow-100
          ${label==current?"h-0 opacity-0":"h-1"}
          `}/>
        </div>
      </div>
    </button>
  )
}