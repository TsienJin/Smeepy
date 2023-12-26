import {useEffect, useRef, useState, type ChangeEvent} from "react";
import {twMerge} from "tailwind-merge";


export const ReactInputAreaField = (
  {
    label = "Label",
    defaultVal = "",
    isError = false,
    hoist = () => {},
    textAreaClass=""
  }: {
    label?: string,
    defaultVal?: string,
    isError?: boolean,
    hoist?: any
    textAreaClass?:string
  }
) => {


  const ref = useRef(null)
  const [val, setVal] = useState<string>(defaultVal)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setVal(e.target.value)
  }

  useEffect(() => {
    hoist(val)
  }, [val]);


  return(
    <div className={`flex flex-col justify-start items-start gap-y-1 max-w-full w-auto grow`}>
      <label htmlFor={`input_id_${label}`} className={`text-shadow-600`}>{label}</label>
      <textarea id={`input_id_${label}`} ref={ref} onChange={handleChange} defaultValue={defaultVal}
      className={twMerge(`
      px-4 py-3
      rounded
      w-full
      max-w-full
      min-h-[90px]
      max-h-[240px]
      text-shadow
      border border-shadow-300
      `, textAreaClass)}/>
    </div>
  )
}