import {AuxiliaryButton} from "../../primatives/click/AuxiliaryButton/AuxiliaryButton.tsx";
import {
  ArrowDownAZIcon,
  FolderPlus,
  RefreshCwIcon,
  SlidersHorizontal
} from "lucide-react";
import {AuxiliaryButtonContainer} from "../../primatives/click/AuxiliaryButton/AuxilaryButtonContainer.tsx";
import {HeaderRow} from "../../primatives/table/headerRow.tsx";
import {HeaderCell} from "../../primatives/table/headerCell.tsx";
import {Table} from "../../primatives/table/Table.tsx";
import {TableRow} from "../../primatives/table/tableRow.tsx";
import {TableCell} from "../../primatives/table/tableCell.tsx";
import {TableBody} from "../../primatives/table/tableBody.tsx";
import {useEffect, useState} from "react";
import {Caller} from "../../../../util/backend_calls/caller.ts";
import {projects_endpoints} from "../../../../backend_schema/admin/projects.ts";
import useLocalStorageHook from "../../../../util/react/localstoragehook.ts";
import type {Project_All_Type, Project_Type} from "../../../../backend_schema/admin/project_schema";
import {ModalWindow} from "../../../global_components/modal/ModalWindow.tsx";


export const ProjectMain = () => {

  const [smeepyToken, _] = useLocalStorageHook("smeepy")
  const [loading, setLoading] = useState<boolean>(true)
  const [projects, setProjects] = useState<Project_Type[]>([])

  const updateProjects = async () => {
    const res = await Caller<Project_All_Type>(projects_endpoints.all, "GET", smeepyToken).catch(console.error)
    if(res){
      setLoading(false)
      setProjects(res.projects)
    }
  }

  const refreshProjects = () => {
    setLoading(true)
    updateProjects().catch(console.error)
  }

  useEffect(()=>{
    updateProjects().catch(console.error)
  },[])

  return(
    <>
      <ModalWindow>
        
      </ModalWindow>
      <div className={`
      w-full flex flex-col
      `}>
        <AuxiliaryButtonContainer>
          <AuxiliaryButton icon={<FolderPlus size={16}/>}>Create Project</AuxiliaryButton>
          <AuxiliaryButton icon={<SlidersHorizontal size={16}/>}>Filter</AuxiliaryButton>
          <AuxiliaryButton icon={<ArrowDownAZIcon size={16}/>}>Sort</AuxiliaryButton>
          <AuxiliaryButton icon={<RefreshCwIcon size={16}/>} action={refreshProjects}>Refresh</AuxiliaryButton>
        </AuxiliaryButtonContainer>
        <Table>
          <thead>
            <HeaderRow>
              <HeaderCell>Project</HeaderCell>
              <HeaderCell>Owner</HeaderCell>
            </HeaderRow>
          </thead>
          <TableBody>
            {projects.map(proj => {
              return(
                <TableRow key={proj.id} className={`md:hover:bg-shadow-50 transition-colors`}>
                  <TableCell>
                    <a href={`/projects/${proj.id}`}>
                      <div>
                        <span className={`font-semibold text-lg w-full`}>{proj.name}</span>
                        <p>{proj.description}</p>
                      </div>
                    </a>
                  </TableCell>
                  <TableCell className={`whitespace-nowrap`}>{proj.paddock_user_creator.first_name} {proj.paddock_user_creator.last_name}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </>
  )
}