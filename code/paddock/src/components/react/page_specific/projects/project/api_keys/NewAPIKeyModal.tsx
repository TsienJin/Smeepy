import {ModalHeader} from "../../../../modal/ModalHeader.tsx";
import {ReactFormWrapper} from "../../../../primatives/wrapper/FormWrapper.tsx";
import {ReactInputField} from "../../../../primatives/input/ReactInputField.tsx";
import {ReactInputAreaField} from "../../../../primatives/input/ReactInputAreaField.tsx";
import {ReactActionButton} from "../../../../primatives/click/ActionButton.tsx";
import type {ModalInterface} from "../../../../modal/modal.types.ts";
import {useState} from "react";
import useLocalStorageHook from "../../../../../../util/react/localstoragehook.ts";
import create_api_key from "../../../../../../functions/projects/create_api_key.ts";
import type {ApiKeyCredentials} from "../../../../../../types/object.types.ts";
import {ReactSensitiveCopyField} from "../../../../primatives/input/ReactSensitiveCopyField.tsx";





const NewlyCreatedAPIKeyModal = (
  {
    api_key,
    onDone=()=>{}
  }:{
    api_key:ApiKeyCredentials,
    onDone?:any
  }
) => {

  const copyAndClose = () => {
    navigator.clipboard.writeText(api_key.key).then(onDone).catch(console.error)
  }


  return(
    <>
      <ModalHeader>
        {api_key.label}
        <p className={`font-light text-opacity-70 text-base text-shadow max-w-prose`}>
          {api_key.description}
        </p>
      </ModalHeader>
      <ReactFormWrapper className={`gap-y-2`}>
        <ReactSensitiveCopyField label={"Key"} value={api_key.key}/>
        <ReactActionButton text={"Copy and close"} action={copyAndClose}/>
      </ReactFormWrapper>
      <span className={`font-light text-opacity-70 text-sm text-shadow max-w-prose mt-1`}>
          You will not be able to retrieve this API key again.
      </span>
    </>
  )
}



export const NewAPIKeyModal = (
  {
    id="",
    onDone=()=>{}
  }:ModalInterface
) => {

  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [apiKey, setApiKey] = useState<ApiKeyCredentials|undefined>(undefined)

  const [smeepyToken, setSmeepyToken] = useLocalStorageHook("smeepy")

  const createApiKey = () => {
    if(name && description){
      setIsLoading(true)
      create_api_key(id, name, description, smeepyToken).then(setApiKey).catch(console.error)
    }
  }

  if(apiKey){
    return(
      <NewlyCreatedAPIKeyModal api_key={apiKey} onDone={onDone}/>
    )
  }


  return(
    <>
      <ModalHeader>
        Create New API Key
      </ModalHeader>
      <ReactFormWrapper>
        <ReactInputField focus={true} label={"Name"} hoist={setName}/>
        <ReactInputAreaField label={"Description"} hoist={setDescription}/>
        <ReactActionButton text={"Create API Key"} action={createApiKey} loading={isLoading}/>
      </ReactFormWrapper>
    </>
  )
}