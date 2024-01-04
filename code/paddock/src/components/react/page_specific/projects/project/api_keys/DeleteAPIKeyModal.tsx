import {ModalHeader} from "../../../../modal/ModalHeader.tsx";
import type {ApiKey} from "../../../../../../types/object.types.ts";
import {CodeInline} from "../../../../primatives/code/CodeInline.tsx";
import {ReactFormWrapper} from "../../../../primatives/wrapper/FormWrapper.tsx";
import {ReactInputField} from "../../../../primatives/input/ReactInputField.tsx";
import {ReactActionButton} from "../../../../primatives/click/ActionButton.tsx";
import {useState} from "react";
import delete_project_api_key from "../../../../../../functions/projects/delete_project_api_key.ts";
import useLocalStorageHook from "../../../../../../util/react/localstoragehook.ts";


export const DeleteAPIKeyModal = (
  {
    ApiKey,
    onDone=()=>{}
  }:{
    ApiKey:ApiKey,
    onDone?:any
  }
) => {

  const [smeepyToken, _] = useLocalStorageHook("smeepy")

  const [textField, setTextField] = useState<string>("")


  const handleDelete = () => {
    if(textField === `Delete ${ApiKey.label}`){
      delete_project_api_key(ApiKey.id, smeepyToken).then(onDone).catch(console.error)
    }
  }




  return(
    <>
      <ModalHeader>
        Delete API Key
      </ModalHeader>
      <ReactFormWrapper className={`gap-y-2`}>
        <div className={`w-full mb-2`}>
          <p className={`max-w-prose`}>
            Are you sure you want to delete <CodeInline>{ApiKey.label}</CodeInline>? <br/>
            This will action <strong>cannot</strong> be undone.
          </p>
        </div>
        <ReactInputField focus={true} hoist={setTextField} label={<>Type <CodeInline>Delete {ApiKey.label}</CodeInline> to confirm.</>} />
        <ReactActionButton action={handleDelete} text={"Delete API Key"} className={`bg-red-600 text-white md:hover:bg-red-500`}/>
      </ReactFormWrapper>
    </>
  )
}