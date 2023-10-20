import {CardTitle} from "../../primatives/card/cardtitle.tsx";
import {ReactQuestionLink} from "../../primatives/click/questionLink.tsx";
import {ReactWireCard} from "../../primatives/wrapper/Wire_Card.tsx";
import {ReactFormWrapper} from "../../primatives/wrapper/FormWrapper.tsx";
import {ReactInputField} from "../../primatives/input/ReactInputField.tsx";
import {ReactActionButton} from "../../primatives/click/ActionButton.tsx";
import {useLocalStorage} from "usehooks-ts";
import {useState} from "react";
import {handle_create} from "../../../../functions/auth/handle_create.ts";
import replaceLocal from "../../../../functions/util/redirect_local.ts";


export const ReactRegisterCard = () => {


  const [token, setToken] = useLocalStorage("smeepy","")

  const [isLoading, setIsLoading] = useState(false)

  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [confirmPassword, setConfirmPassword]= useState("")
  const [fName, setFName]= useState("")
  const [lName, setLName]= useState("")




  const valid_input = () => {
    console.log(email)
    return (email && password && confirmPassword && fName && lName && password===confirmPassword)
  }

  const submitForm = () => {
    if(valid_input()){
      setIsLoading(true)
      handle_create(email, password, fName, lName)
        .then(e=>{
          if(e){
            setToken(e)
            replaceLocal("/dashboard")
          }
        })
        .catch(()=>{setIsLoading(false)})
    }
  }


  return(
    <ReactWireCard>
      <div className={`
      flex flex-col justify-start items-start gap-y-10
      `}>
        <div className={`flex flex-col justify-start items-start gap-y-6`}>
          <CardTitle title={"Sign up"} />
          <ReactQuestionLink question={"Have an account?"} link={"/"} linkText={"Login"} target={"_self"} />
        </div>
        <ReactFormWrapper action={submitForm}>
          <div className={`flex flex-col md:flex-row gap-x-2 gap-y-6 max-w-[45ch]`}>
            <ReactInputField label={"First name"} hoist={setFName} />
            <ReactInputField label={"Last name"} hoist={setLName} />
          </div>
          <ReactInputField label={"Email"} hoist={setEmail} />
          <ReactInputField label={"Password"} type={"password"} hoist={setPassword}/>
          <ReactInputField label={"Confirm Password"} type={"password"} hoist={setConfirmPassword}/>
          <ReactActionButton text={"Create account"} type={"submit"} action={submitForm} />
        </ReactFormWrapper>
      </div>
    </ReactWireCard>
  )
}