import express, {Request, Response} from "express"
import * as process from "process"


const app = express()

app.get("/", (req:Request, res:Response) => {
  res.send("Hello world!")
})

app.listen(process.env.EXPRESS_PORT||8000, ()=>{
  if (process.env.EXPRESS_PORT==undefined){console.warn("Express Port not set! Using fallback port!")}
  console.info(`🚀 Express app listening on port ${process.env.EXPRESS_PORT||8000}`)
})
