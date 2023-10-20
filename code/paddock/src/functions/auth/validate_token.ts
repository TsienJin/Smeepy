import axios from "axios";


export default function validateToken(token:string):boolean {

  axios.get(`${import.meta.env.PUBLIC_BACKEND_URL}/admin/user/validate`)
    .then((r: any)=>{console.log(r)})

  return false
}