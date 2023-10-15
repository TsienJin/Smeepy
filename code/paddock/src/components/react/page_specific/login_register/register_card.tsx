import {CardTitle} from "../../primatives/card/cardtitle.tsx";
import {ReactQuestionLink} from "../../primatives/click/questionLink.tsx";
import {ReactWireCard} from "../../primatives/wrapper/Wire_Card.tsx";
import {ReactFormWrapper} from "../../primatives/wrapper/FormWrapper.tsx";
import {ReactInputField} from "../../primatives/input/ReactInputField.tsx";
import {ReactActionButton} from "../../primatives/click/ActionButton.tsx";


export const ReactRegisterCard = () => {

  const submitForm = () => {
    console.log("Submitted!")
  }


  return(
    <ReactWireCard>
      <div className={`
      flex flex-col justify-start items-start gap-y-10
      `}>
        <div className={`flex flex-col justify-start items-start gap-y-6`}>
          <CardTitle title={"Register"} />
          <ReactQuestionLink question={"Have an account?"} link={"/"} linkText={"Login"} target={"_self"} />
        </div>
        <ReactFormWrapper>
          <div className={`flex flex-col md:flex-row gap-x-2 gap-y-6 max-w-[45ch]`}>
            <ReactInputField label={"First name"} />
            <ReactInputField label={"Last name"} />
          </div>
          <ReactInputField label={"Email"} />
          <ReactInputField label={"Password"} type={"password"}/>
          <ReactInputField label={"Confirm Password"} type={"password"}/>
          <ReactActionButton text={"Create account"} type={"submit"} action={submitForm} />
        </ReactFormWrapper>
      </div>
    </ReactWireCard>
  )
}