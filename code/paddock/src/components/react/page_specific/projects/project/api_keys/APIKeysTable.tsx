import {Table} from "../../../../primatives/table/primary/Table.tsx";
import type {ApiKey} from "../../../../../../types/object.types.ts";
import {HeaderRow} from "../../../../primatives/table/primary/headerRow.tsx";
import {HeaderCell} from "../../../../primatives/table/primary/headerCell.tsx";
import {TableBody} from "../../../../primatives/table/primary/tableBody.tsx";
import {TableRow} from "../../../../primatives/table/primary/tableRow.tsx";
import {TableCell} from "../../../../primatives/table/primary/tableCell.tsx";
import {TableActionButton} from "../../../../primatives/table/primary/tableActionButton.tsx";
import {MoreHorizontalIcon, PencilIcon, Trash2Icon} from "lucide-react";
import {TableActionButtonContainer} from "../../../../primatives/table/primary/tableActionButtonContainer.tsx";
import {ReactToggleSwitch} from "../../../../primatives/input/ReactToggleSwitch.tsx";
import {ModalWindow} from "../../../../modal/ModalWindow.tsx";
import {useEffect, useState} from "react";
import {EditAPIKeyModal} from "./EditAPIKeyModal.tsx";
import {DeleteAPIKeyModal} from "./DeleteAPIKeyModal.tsx";
import update_project_api_key_service_beaver
  from "../../../../../../functions/projects/update_project_api_key_service_beaver.ts";
import useLocalStorageHook from "../../../../../../util/react/localstoragehook.ts";
import {NewAPIKeyModal} from "./NewAPIKeyModal.tsx";
import client_refresh from "../../../../../../util/react/client_refresh.ts";


export const APIKeysTable = (
  {
    keys=[],
    refreshApiKeys=()=>{},
    loading=false,
    createKeyOnDone=()=>{},
    projId=""
  }:{
    keys?:ApiKey[],
    refreshApiKeys?:any,
    loading?:boolean,
    createKeyOnDone?:any,
    projId?:string
  }
) => {

  const [smeepyToken, _] = useLocalStorageHook("smeepy")

  const [modalChild, setModalChild] = useState<any>(undefined)
  const [modalCloseSem, setModalCloseSem] = useState<any>("")

  const handleEditServiceBeaver = (key:ApiKey, state:boolean) => {
    update_project_api_key_service_beaver(key.id, state, smeepyToken).catch(console.error)
  }

  const handleEditApiKey = (key:ApiKey) => {
    setModalChild(<EditAPIKeyModal key_id={key.id} label={key.label} description={key.description} onDone={handleEditApiKeyClose}/>)
  }

  const handleDeleteApiKey = (key:ApiKey) => {
    setModalChild(<DeleteAPIKeyModal ApiKey={key} onDone={handleDeleteApiKeyClose}/>)
  }

  const handleEditApiKeyClose = () => {
    refreshApiKeys()
    setModalCloseSem(Math.random()*100000)
    setTimeout(()=>{setModalChild(undefined)}, 200)
  }

  const handleDeleteApiKeyClose = () => {
    refreshApiKeys()
    setModalCloseSem(Math.random()*100000)
    setTimeout(()=>{setModalChild(undefined)}, 200)
  }

  useEffect(() => {
    window.addEventListener("keydown", client_refresh(refreshApiKeys), false)

    return(()=>{
      window.removeEventListener("keydown", client_refresh(refreshApiKeys), false)
    })
  }, []);

  return(
    <>
      <ModalWindow open={modalChild!==undefined} onClose={handleEditApiKeyClose} closeSemaphore={modalCloseSem}>
        {modalChild}
      </ModalWindow>
      <div className={`
      w-full
      `}>
        <Table loading={loading && keys.length===0} displayEmptyChild={!loading && keys.length===0} emptyChildren={<NewAPIKeyModal id={projId} onDone={createKeyOnDone}/>}>
          <HeaderRow>
            <HeaderCell max={true}>Key</HeaderCell>
            <HeaderCell center={false}>Beaver</HeaderCell>
            <HeaderCell center={false}>Action</HeaderCell>
          </HeaderRow>
          <TableBody>
            {keys.map(key => {
              return(
                <TableRow key={key.id} className={`md:hover:bg-shadow-50 transition-colors`}>
                  <TableCell>
                    <div className={`flex flex-col justify-start items-start`}>
                      <span className={`font-semibold text-lg w-full`}>{key.label}</span>
                      <p className={`max-w-prose`}>{key.description}</p>
                    </div>
                  </TableCell>
                  <TableCell center={false}><ReactToggleSwitch onChange={(state:boolean)=>{handleEditServiceBeaver(key, state)}} initState={key.paddock_api_key_services.enable_beaver}/></TableCell>
                  <TableCell center={false}>
                    <TableActionButtonContainer className={`justify-start`}>
                      <TableActionButton action={()=>{handleEditApiKey(key)}}>
                        <PencilIcon size={16} />
                      </TableActionButton>
                      <TableActionButton action={()=>{handleDeleteApiKey(key)}} className={`
                      md:hover:bg-rust-100 md:hover:text-rust md:hover:border-rust-300
                      `}>
                        <Trash2Icon size={16} />
                      </TableActionButton>
                    </TableActionButtonContainer>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </>
  )
}