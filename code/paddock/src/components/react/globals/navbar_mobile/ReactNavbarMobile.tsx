import {useState} from "react";
import {Folders, Menu, User, X} from "lucide-react";
import {ReactNavbarElement} from "../navbar/navbar_element.tsx";
import {ReactNavbarElementLogout} from "../navbar/navbar_element_logout.tsx";


export const ReactNavbarMobile = () => {

  const [expanded, setExpended] = useState<boolean>(false)

  const handleRedir = () => {
    setTimeout(()=>{
      setExpended(false)
    }, 150)
  }

  const setExpandTrue = () => {
    console.log("clicked")
    setExpended(true)
  }

  const setExpandFalse = () => {
    setExpended(false)
  }

  return(
    <div className={`
    lg:hidden
    flex flex-col
    bg-shadow shadow
    p-3 text-shadow-50
    sticky top-0 z-50
    max-w-[100dvw]
    `}>
      <div className={`
        flex flex-row justify-between items-center
      `}>
        <a href="/dash">
          <img src="/logo/smeepy_full_white.svg" alt="" className={`h-6`}/>
        </a>
        <button onClick={setExpandTrue}>
          <Menu />
        </button>
      </div>
      <div className={`
      absolute top-0 left-0 right-0 bottom-0 h-screen
      transition-all
      ${expanded?"bg-shadow bg-opacity-50 backdrop-blur-sm":"pointer-events-none backdrop-blur-none"}
      `}/>
      <div className={`
      slide-out-menu
      h-screen max-h-screen
      absolute top-0 bottom-0 right-0 z-50
      transition-all duration-300
      ${expanded?"max-w-full pointer-events-auto":"max-w-0 pointer-events-none"}
      overflow-hidden
      flex flex-row justify-end items-stretch
      `}>
        <div className={`flex flex-col justify-stretch items-end p-3 bg-shadow w-fit gap-y-4`}>
          <button onClick={setExpandFalse}>
            <X />
          </button>
          <div className={`h-px w-full bg-white opacity-30`}/>
          <div className={`flex flex-col justify-between items-stretch overflow-hidden h-full`}>
            <div className={`relative h-full overflow-y-scroll`}>
              <div className={`flex flex-col justify-start items-stretch overflow-y-scroll gap-y-2 pb-8`}>
                <ReactNavbarElement label={"Dashboard"} link={"/dash"} callback={handleRedir}>
                  <Folders />
                </ReactNavbarElement>
              </div>
            </div>
            <div className={`flex flex-col gap-y-4`}>
              <ReactNavbarElementLogout />
              <ReactNavbarElement label={"Account"} link={"/account"} callback={handleRedir}>
                <User />
              </ReactNavbarElement>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}