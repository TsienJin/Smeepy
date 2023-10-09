import express, {Request, Response} from "express"
import * as process from "process"
import {createClient} from "redis";
import {admin_router} from "@routes/admin/admin_router";
import {api_router} from "@routes/api/api_router";

const app = express()

// const redis = createClient({
//   url: process.env.DATABASE_REDIS
// })




app.get("/", (req:Request, res:Response) => {
  res.send("Hello world!")
})

// router for all admin related endpoints that are used for user interaction (e.g. paddock)
app.use("/admin", admin_router)

// api router for client facing endpoints
app.use("/api", api_router)

app.listen(process.env.EXPRESS_PORT||8000, ()=>{
  if (process.env.EXPRESS_PORT==undefined){console.warn("Express Port not set! Using fallback port!")}
  console.info(`🚀 Express app listening on port ${process.env.EXPRESS_PORT||8000}`)
  //
  // await redis.connect()
  // console.log(await redis.subscribe('key', message => {
  //   console.log(message)
  // }))
})
