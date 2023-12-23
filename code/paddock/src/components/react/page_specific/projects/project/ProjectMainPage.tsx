import {useEffect, useState} from "react";
import get_by_id from "../../../../../functions/projects/get_by_id.ts";
import useLocalStorageHook from "../../../../../util/react/localstoragehook.ts";
import type {Project} from "../../../../../types/object.types.ts";


export const ProjectMainPage = (
  {
    id
  }:{
    id:string
  }
) => {

  const [token, _] = useLocalStorageHook("smeepy")

  const [proj, setProj] = useState<Project|undefined>(undefined)

  useEffect(() => {
    get_by_id(id, token).then(setProj).catch(console.error)
  }, []);

  if(!proj){
    return "loading..."
  }

  return(
    <>
      <div>
        <h1 className="font-bold text-6xl w-full">{proj.name}</h1>
        <p className={`
        
        `}>{proj.description}</p>
      </div>
    </>
  )
}