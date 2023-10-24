import {LogOut} from "lucide-react";


export const ReactNavbarElementLogout = () => {

  return(
    <div className={`w-full text-shadow-400 text-xs flex flex-row justify-center items-center`}>
      <a href="/logout" className="w-full text-center">
        Logout
      </a>
    </div>
  )
}