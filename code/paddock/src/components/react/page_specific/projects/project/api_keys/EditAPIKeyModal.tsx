import {ModalHeader} from "../../../../modal/ModalHeader.tsx";
import {ReactFormWrapper} from "../../../../primatives/wrapper/FormWrapper.tsx";
import {ReactInputField} from "../../../../primatives/input/ReactInputField.tsx";
import {ReactInputAreaField} from "../../../../primatives/input/ReactInputAreaField.tsx";
import {ReactActionButton} from "../../../../primatives/click/ActionButton.tsx";
import {useState} from "react";
import update_project_api_key_details from "../../../../../../functions/projects/update_project_api_key_details.ts";
import useLocalStorageHook from "../../../../../../util/react/localstoragehook.ts";


export const EditAPIKeyModal = (
  {
    key_id,
    label,
    description="",
    onDone=()=>{}
  }:{
    key_id:string,
    label:string,
    description?:string,
    onDone?:any
  }
) => {

  const [smeepyToken, setSmeepyToken] = useLocalStorageHook("smeepy")

  const [loading, setLoading] = useState<boolean>(false)

  const [updatedLabel, setUpdatedLabel] = useState<string>(label)
  const [updatedDesc, setUpdatedDesc] = useState<string>(description)


  const handleSubmit = () => {
    if(updatedLabel && updatedDesc){
      setLoading(true)
      update_project_api_key_details(key_id, updatedLabel, updatedDesc, smeepyToken).then(onDone).catch(console.error)
    }
  }


  return(
    <>
      <ModalHeader>
        Edit API Key Details
      </ModalHeader>
      <ReactFormWrapper>
        <ReactInputField label={"Label"} defaultVal={label} hoist={setUpdatedLabel}/>
        <ReactInputAreaField label={"Description"} defaultVal={description} hoist={setUpdatedDesc}/>
        <ReactActionButton text={"Update API Key"} loading={loading} action={handleSubmit}/>
      </ReactFormWrapper>
    </>
  )

}