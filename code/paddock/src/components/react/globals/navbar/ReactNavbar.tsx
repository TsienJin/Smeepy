import {ReactNavbarElement} from "./navbar_element.tsx";
import {Folders, User} from "lucide-react";
import {ReactNavbarElementLogout} from "./navbar_element_logout.tsx";
import {useState} from "react";


export const ReactNavbar = () => {

  const [expanded, setExpanded] = useState<boolean>(false)

  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  return(
    <div className={`
      hidden
      lg:h-screen p-6 pr-0 sticky top-0 shrink-0
      lg:flex flex-row
    `}>
      <div className={`
      bg-shadow rounded-xl h-full p-3 pt-6 flex flex-col gap-y-4
      `}>
        <a href="/dash" draggable={false} className={`w-full`}>
          <img draggable={false} src="/logo/smeepy_logo_white.svg" alt="" className={`h-[26px] select-none ${expanded?"hidden":""}`}/>
          <img draggable={false} src="/logo/smeepy_full_white.svg" alt="" className={`h-[26px] select-none ${expanded?"":"hidden"}`}/>
        </a>
        <span className={`bg-white opacity-30 h-px`}/>
        <nav className={`
        nav-items
        flex flex-col justify-between items-center h-full
        `}>
          <ReactNavbarElement label={"Dashboard"} link={"/dash"} expanded={expanded}>
            <Folders />
          </ReactNavbarElement>
          <div className={`flex flex-col justify-center items-start gap-y-2 w-full`}>
            <ReactNavbarElementLogout />
            <ReactNavbarElement label={"Account"} link={"/account"} expanded={expanded}>
              <User />
            </ReactNavbarElement>
          </div>
        </nav>
      </div>
      <div className={`lg:h-full`}>
        <button onClick={toggleExpand} className={`h-full w-3 ${expanded?"cursor-w-resize":"cursor-e-resize"}`}/>
      </div>

    </div>
  )
}