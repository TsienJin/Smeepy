import express, {Request, Response} from "express"
import * as process from "process"
import {admin_router} from "@routes/admin/admin_router";
import {api_router} from "@routes/api/api_router";
import {createServer} from "http";
import {WebSocketServer} from "ws";

const app = express()

app.listen(process.env.EXPRESS_PORT||8000, ()=>{
  if (process.env.EXPRESS_PORT==undefined){console.warn("Express Port not set! Using fallback port!")}
  console.info(`🚀 Express app listening on port ${process.env.EXPRESS_PORT||8000}`)
})







app.get("/", (req:Request, res:Response) => {
  res.send("Hello world!")
})

// router for all admin related endpoints that are used for user interaction (e.g. paddock)
app.use("/admin", admin_router)

// api router for client facing endpoints
app.use("/api", api_router)