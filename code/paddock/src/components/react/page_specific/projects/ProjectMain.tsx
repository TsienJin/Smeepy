import {AuxiliaryButton} from "../../primatives/click/AuxiliaryButton/AuxiliaryButton.tsx";
import {
  ArrowDownAZIcon, ExternalLink, ExternalLinkIcon,
  FolderPlus, Link,
  RefreshCwIcon,
  SlidersHorizontal
} from "lucide-react";
import {AuxiliaryButtonContainer} from "../../primatives/click/AuxiliaryButton/AuxilaryButtonContainer.tsx";
import {HeaderRow} from "../../primatives/table/primary/headerRow.tsx";
import {HeaderCell} from "../../primatives/table/primary/headerCell.tsx";
import {Table} from "../../primatives/table/primary/Table.tsx";
import {TableRow} from "../../primatives/table/primary/tableRow.tsx";
import {TableCell} from "../../primatives/table/primary/tableCell.tsx";
import {TableBody} from "../../primatives/table/primary/tableBody.tsx";
import React, {useEffect, useState} from "react";
import {Caller} from "../../../../util/backend_calls/caller.ts";
import {projects_endpoints} from "../../../../backend_schema/admin/projects.ts";
import useLocalStorageHook from "../../../../util/react/localstoragehook.ts";
import type {Project_All_Type, Project_Type} from "../../../../backend_schema/admin/project_schema";
import {ModalWindow} from "../../modal/ModalWindow.tsx";
import {ProjectCreateModal} from "./ProjectCreateModal.tsx";
import replaceLocal from "../../../../functions/util/replace_local.ts";


/**
 * Component for rendering the table overviewing the different projects.
 */
export const ProjectMain = () => {

  const [modalChild, setModalChild] = useState<any>(undefined)
  const [modalCloseSem, setModalCloseSem] = useState<any>("")

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

  const createProject = () => {

    const created = (new_id:string) => {
      setModalCloseSem(new_id)
      replaceLocal(`/projects/${new_id}`)
    }

    setModalChild(<ProjectCreateModal onDone={created}/>)
  }

  const refreshProjects = () => {
    setLoading(true)
    updateProjects().catch(console.error)
  }

  const handleModalClose = () => {
    setTimeout(()=>{
      setModalChild(undefined)
    }, 200)
  }

  useEffect(()=>{
    updateProjects().catch(console.error)
  },[])

  return(
    <>
      <ModalWindow open={modalChild!==undefined} onClose={handleModalClose} closeSemaphore={modalCloseSem}>
        {modalChild}
      </ModalWindow>
      <div className={`
      w-full flex flex-col
      `}>
        <AuxiliaryButtonContainer>
          <AuxiliaryButton icon={<FolderPlus size={16}/>} action={createProject}>Create Project</AuxiliaryButton>
          <AuxiliaryButton icon={<SlidersHorizontal size={16}/>}>Filter</AuxiliaryButton>
          <AuxiliaryButton icon={<ArrowDownAZIcon size={16}/>}>Sort</AuxiliaryButton>
          <AuxiliaryButton icon={<RefreshCwIcon size={16}/>} action={refreshProjects}>Refresh</AuxiliaryButton>
        </AuxiliaryButtonContainer>
        <Table loading={loading}>
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
                        <span className={`font-semibold text-lg w-full flex flex-row justify-start items-center gap-1`}>{proj.name}</span>
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