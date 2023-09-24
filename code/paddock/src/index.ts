import express, {Request, Response} from "express"
import * as dotenv from "dotenv"
import * as process from "process"


/**
 * Loads .env.dev only if in dev environment.
 *
 * Possible Environments:
 * 1. dev
 * 2. staging (handled by docker)
 * 3. production (handled by docker)
 */
if(process.env.NODE_ENV==="dev"){
  console.info("Loading development environment!")
  dotenv.config({
    path: __dirname+"/../.env.dev"
  })
}

const app = express()

app.get("/", (req:Request, res:Response) => {
  res.send("Hello world!")
})

app.listen(process.env.EXPRESS_PORT||8000, ()=>{
  if (process.env.EXPRESS_PORT==undefined){console.warn("Express Port not set! Using fallback port!")}
  console.info(`🚀 Express app listening on port ${process.env.EXPRESS_PORT||8000}`)
})
