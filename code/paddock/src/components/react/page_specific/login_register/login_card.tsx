import {CardTitle} from "../../primatives/card/cardtitle.tsx";
import {ReactQuestionLink} from "../../primatives/click/questionLink.tsx";
import {ReactWireCard} from "../../primatives/wrapper/Wire_Card.tsx";
import {ReactInputField} from "../../primatives/input/ReactInputField.tsx";
import {ReactFormWrapper} from "../../primatives/wrapper/FormWrapper.tsx";
import {ReactActionButton} from "../../primatives/click/ActionButton.tsx";
import {useState} from "react";


export const ReactLoginCard = () => {


  const [waitingRes, setWaitingRes] = useState<boolean>(false)


  const submitForm = () => {
    console.log("Submitting!")
    setWaitingRes(true)
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
          <ReactInputField label={"Email"} />
          <ReactInputField label={"Password"} />
          <ReactActionButton text={"Login"} type={"submit"} action={submitForm} loading={waitingRes}/>
        </ReactFormWrapper>
      </div>
    </ReactWireCard>
  )
}