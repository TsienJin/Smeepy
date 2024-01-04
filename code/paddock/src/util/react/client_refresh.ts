/**
 * Templated method to prevent browser refresh when using keyboard to refresh
 * @param e
 * @param callback
 */
export default function client_refresh(callback:any){
  return((e:KeyboardEvent)=>{
    if(e.isTrusted && (e.metaKey || e.ctrlKey) && e.key==='r'){
      e.preventDefault()
      callback()
    }
  })
}