import {CardTitle} from "../../primatives/card/cardtitle.tsx";
import {ReactQuestionLink} from "../../primatives/click/questionLink.tsx";
import {ReactWireCard} from "../../primatives/wrapper/Wire_Card.tsx";
import {ReactInputField} from "../../primatives/input/ReactInputField.tsx";
import {ReactFormWrapper} from "../../primatives/wrapper/FormWrapper.tsx";
import {ReactActionButton} from "../../primatives/click/ActionButton.tsx";
import {useState} from "react";
import {handle_login} from "../../../../functions/auth/handle_login.ts";
import {useLocalStorage} from "usehooks-ts";
import replaceLocal from "../../../../functions/util/replace_local.ts";


export const ReactLoginCard = () => {

  const [smeepyToken, setSmeepyToken] = useLocalStorage("smeepy", "")

  const [waitingRes, setWaitingRes] = useState<boolean>(false)

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")


  const submitForm = () => {
    if(email && password){
      setWaitingRes(true)
      handle_login(email, password)
        .then(r=>{
          console.log(r)
          if(r){
            setSmeepyToken(r)
            replaceLocal("/dash")
          }
        })
        .then(()=>{setWaitingRes(false)})
    }
  }



  return(
    <ReactWireCard>
      <div className={`
      flex flex-col justify-start items-start gap-y-10
      `}>
        <div className={`flex flex-col justify-start items-start gap-y-6`}>
          <CardTitle title={"Login"} />
          <ReactQuestionLink question={"Don't have an account?"} link={"/signup"} linkText={"Sign up"} target={"_self"} />
        </div>
        <ReactFormWrapper action={submitForm}>
          <ReactInputField label={"Email"} hoist={setEmail} />
          <ReactInputField label={"Password"} hoist={setPassword} type={"password"}/>
          <ReactActionButton text={"Login"} type={"submit"} action={submitForm} loading={waitingRes}/>
        </ReactFormWrapper>
      </div>
    </ReactWireCard>
  )
}