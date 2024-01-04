import {ModalHeader} from "../../modal/ModalHeader.tsx";
import {ReactInputField} from "../../primatives/input/ReactInputField.tsx";
import {ReactFormWrapper} from "../../primatives/wrapper/FormWrapper.tsx";
import {ReactInputAreaField} from "../../primatives/input/ReactInputAreaField.tsx";
import {ReactActionButton} from "../../primatives/click/ActionButton.tsx";
import {useState} from "react";
import useLocalStorageHook from "../../../../util/react/localstoragehook.ts";
import create_project from "../../../../functions/projects/create_project.ts";
import type {ModalInterface} from "../../modal/modal.types.ts";


export const ProjectCreateModal = (
  {
    onDone=()=>{}
  }:ModalInterface
) => {

  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")

  const [loading, setLoading] = useState<boolean>(false)

  const [token, setToken] = useLocalStorageHook("smeepy")

  const handleSubmit = () => {
    if(name && description){
      setLoading(true)
      create_project(name, description, token)
        .then(r=>{
          setLoading(false)
          onDone(r)
        })
        .catch(console.error)
    }
  }

  return(
    <div className={`
    w-full h-full 
    flex flex-col
    `}>
      <ModalHeader>
        Create Project
      </ModalHeader>
      <ReactFormWrapper>
        <ReactInputField focus={true} label={"Project name"} hoist={setName}/>
        <ReactInputAreaField label={"Description"} hoist={setDescription}/>
        <ReactActionButton text={"Create"} loading={loading} action={handleSubmit}/>
      </ReactFormWrapper>
    </div>
  )
}