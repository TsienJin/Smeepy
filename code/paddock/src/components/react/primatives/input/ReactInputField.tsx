import {useEffect, useRef, useState, type ChangeEvent} from "react";


export const ReactInputField = (
  {
    label = "Label",
    defaultVal = "",
    isError = false,
    type = "text",
    hoist = () => {
    }
  }: {
    label?: string,
    defaultVal?: string,
    isError?: boolean,
    type?: "text" | "password"
    hoist?: any
  }
) => {


  const ref = useRef(null)
  const [val, setVal] = useState<string>(defaultVal)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value)
  }

  useEffect(() => {
    hoist(val)
  }, [val]);


  return(
    <div className={`flex flex-col justify-start items-start gap-y-1 max-w-full lg:w-auto grow`}>
      <label htmlFor={`input_id_${label}`} className={`text-shadow-600`}>{label}</label>
      <input id={`input_id_${label}`} ref={ref} onChange={handleChange} defaultValue={defaultVal} type={type}
      className={`
      px-4 py-3
      rounded
      w-full
      max-w-full
      text-shadow
      border border-shadow-300
      `}/>
    </div>
  )
}