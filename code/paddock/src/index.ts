import express, {Request, Response} from "express"
import * as process from "process"
import {createClient} from "redis";

const app = express()

const redis = createClient({
  url: process.env.DATABASE_REDIS
})




app.get("/", (req:Request, res:Response) => {
  res.send("Hello world!")
})

app.listen(process.env.EXPRESS_PORT||8000, async ()=>{
  if (process.env.EXPRESS_PORT==undefined){console.warn("Express Port not set! Using fallback port!")}
  console.info(`🚀 Express app listening on port ${process.env.EXPRESS_PORT||8000}`)

  await redis.connect()
  console.log(await redis.subscribe('key', message => {
    console.log(message)
  }))
})
