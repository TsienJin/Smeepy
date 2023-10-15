


export const ReactQuestionLink = (
  {
    question,
    link,
    linkText,
    target
  }:{
    question:string,
    link:string,
    linkText:string,
    target:"_self"|"_blank"|string
  }
) => {
  return(
    <div className={`flex flex-row gap-x-6`}>
      <span className={`text-xl font-normal text-shadow`}>{question}</span>
      <a href={link} target={target}>
        <span className={`text-xl font-medium text-violet`}>{linkText}</span>
      </a>
    </div>
  )
}