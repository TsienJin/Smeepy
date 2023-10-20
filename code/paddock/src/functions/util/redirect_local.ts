



export default function redirectLocal(path:string):void{
  window.location.href = `${import.meta.env.PUBLIC_PADDOCK_URL}${path}`
}