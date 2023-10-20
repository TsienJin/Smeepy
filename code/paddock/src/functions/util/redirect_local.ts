



export default function redirectLocal(path:string):void{
  window.location.replace(`${import.meta.env.PUBLIC_PADDOCK_URL}${path}`)
}