import {IslandTitleGroup} from "../dashboard/islands/IslandTitleGroup.tsx";
import {AuxiliaryButtonContainer} from "../../../../primatives/click/AuxiliaryButton/AuxilaryButtonContainer.tsx";
import {AuxiliaryButton} from "../../../../primatives/click/AuxiliaryButton/AuxiliaryButton.tsx";
import {ArrowDownAZIcon, KeyRound, RefreshCwIcon, SlidersHorizontal} from "lucide-react";
import React, {useState} from "react";
import {ModalWindow} from "../../../../modal/ModalWindow.tsx";
import {NewAPIKeyModal} from "./NewAPIKeyModal.tsx";

/**
 * Component responsible for rendering the table with API keys and products etc.
 * @param id {string}
 * @param updateDashboard {any} callback function to update dashboard information
 * @constructor
 */
export const APIKeysTab = (
  {
    id,
    updateDashboard=()=>{}
  }:{
    id:string,
    updateDashboard?:any
  }
) => {

  const [modalChild, setModalChild] = useState<any>(undefined)
  const [modalCloseSem, setModalCloseSem] = useState<number|string>("")

  const handleClose = () => {
    updateDashboard()
    setTimeout(()=>{
      setModalChild(undefined)
    }, 200)
  }

  const onDone = () => {
    setModalCloseSem(Math.random()*100000)
    handleClose()
  }

  const handleCreateAPIKey = () => {
    setModalChild(<NewAPIKeyModal id={id} onDone={onDone}/>)
  }

  return(
    <>
      <ModalWindow open={modalChild!==undefined} onClose={handleClose} closeSemaphore={modalCloseSem}>
        {modalChild}
      </ModalWindow>
      <div className={`
      flex flex-col justify-start items-start
      `}>
        <IslandTitleGroup title={"API Keys"}>
          Manage project API keys and associated Smeepy products.
        </IslandTitleGroup>
        <div className={`
        flex flex-col w-full
        `}>
          <AuxiliaryButtonContainer>
            <AuxiliaryButton icon={<KeyRound size={16}/>} action={handleCreateAPIKey}>New API Key</AuxiliaryButton>
            <AuxiliaryButton icon={<SlidersHorizontal size={16}/>}>Filter</AuxiliaryButton>
            <AuxiliaryButton icon={<ArrowDownAZIcon size={16}/>}>Sort</AuxiliaryButton>
            <AuxiliaryButton icon={<RefreshCwIcon size={16}/>}>Refresh</AuxiliaryButton>
          </AuxiliaryButtonContainer>
        </div>
      </div>
    </>
  )

}