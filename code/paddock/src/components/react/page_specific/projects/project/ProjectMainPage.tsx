import {useEffect, useState} from "react";
import get_by_id from "../../../../../functions/projects/get_by_id.ts";
import useLocalStorageHook from "../../../../../util/react/localstoragehook.ts";
import type {Project} from "../../../../../types/object.types.ts";
import {ProjectSummaryPair} from "../ProjectSummaryPair.tsx";
import type {TabLabels} from "../../../primatives/tabs/tab_labels.types.ts";
import {TabButton} from "../../../primatives/tabs/tab_buttons.tsx";
import {TabButtonContainer} from "../../../primatives/tabs/tab_button_container.tsx";
import {TabSection} from "../../../primatives/tabs/tab_section.tsx";
import {ProjectDashboard} from "./dashboard/ProjectDashboard.tsx";
import {APIKeysTab} from "./api_keys/APIKeysTab.tsx";
import client_refresh from "../../../../../util/react/client_refresh.ts";


/**
 * Component for displaying the dashboard for each individual project.
 */
export const ProjectMainPage = (
  {
    id
  }:{
    id:string
  }
) => {

  const [token, _] = useLocalStorageHook("smeepy")
  const [proj, setProj] = useState<Project|undefined>(undefined)


  /**
   * Method to update the overall dashboard information
   * 1. Title
   * 2. Description
   * 3. Summary content
   */
  const fetchProj = () => {
    get_by_id(id, token).then(setProj).catch(console.error)

  }

  const tabs:TabLabels = {
    Dashboard: "Dashboard",
    APIKeys: "API Keys",
    Activity: "Activity",
    Credits: "Credits",
    Collaborators: "Collaborators",
    Settings: "Settings",
  }

  const [curTab, setCurTab] = useState<string>(tabs.APIKeys)

  const callbackFunction = (e:KeyboardEvent) => {
    console.log(e)
    e.preventDefault()
  }

  useEffect(() => {
    fetchProj()

    window.addEventListener("keydown", client_refresh(fetchProj), false)

    return(()=>{
      window.removeEventListener("keydown", client_refresh(fetchProj), false)
    })
  }, []);

  if(!proj){
    return <></>
  }

  return(
    <>
      <div className={`
      border-b-[1px]
      flex md:flex-row md:justify-between md:items-stretch
      flex-col justify-start items-start
      `}>
        <div className={`
        flex flex-col justify-start items-start gap-y-3
        w-full flex-grow
        text-shadow
        pb-3
        `}>
          <h1 className="font-bold text-6xl w-full max-w-prose">{proj.name}</h1>
          <p className={`
          font-light text-xl
          opacity-70
          max-w-prose
          `}>{proj.description}</p>
        </div>
        <div className={`
        w-full md:w-fit
        flex-grow pb-2 pt-2
        md:pl-2 md:pt-0
        border-t border-l-0 md:border-t-0 md:border-l 
        `}>
          <span className={`text-lg font-medium text-shadow mb-4`}>Summary</span>
          <ProjectSummaryPair label={proj.num_keys===1?"API Key":"API Keys"}>{`${proj.num_keys||0}`}</ProjectSummaryPair>
          <ProjectSummaryPair label={proj.credits===1?"Credit":"Credits"}>{`${proj.credits||0}`}</ProjectSummaryPair>
        </div>
      </div>
      <TabButtonContainer>
        {Object.keys(tabs).map(key => {
          return(
            <TabButton key={key} label={tabs[key]} current={curTab} updateCurrent={setCurTab}/>
          )
        })}
      </TabButtonContainer>
      <TabSection label={tabs.Dashboard} current={curTab}>
        <ProjectDashboard id={id} updateDashboard={fetchProj}/>
      </TabSection>
      <TabSection label={tabs.APIKeys} current={curTab}>
        <APIKeysTab id={id} updateDashboard={fetchProj}/>
      </TabSection>
      <TabSection label={tabs.Activity} current={curTab}></TabSection>
      <TabSection label={tabs.Credits} current={curTab}></TabSection>
      <TabSection label={tabs.Collaborators} current={curTab}></TabSection>
      <TabSection label={tabs.Settings} current={curTab}></TabSection>
    </>
  )
}