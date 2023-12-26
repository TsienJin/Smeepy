import {ProjectAPIOverview} from "./islands/ProjectAPIOverview.tsx";

/**
 * Component to render the dashboard for projects.
 * @param id UUID for project
 * @param updateDashboard Method to get page to update Title, Description, and summary of project
 */
export const ProjectDashboard = (
  {
    id,
    updateDashboard=()=>{}
  }:{
    id:string,
    updateDashboard?:any
  }
) => {

  return(
    <div className={`
    w-full md:columns-2 gap-4
    `}>
      <div className={``}>
        {/**Left col containing credits information**/}
        Project dashboard for {id}
      </div>
      <div className={``}>
        {/**Right column containing API information**/}
        <ProjectAPIOverview id={id} />
      </div>
    </div>
  )
}