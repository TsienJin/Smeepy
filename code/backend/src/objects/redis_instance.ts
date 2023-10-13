import {createClient} from "redis";
import * as process from "process"


// https://github.com/prisma/prisma/issues/5139


const RedisClient = createClient({
  url: process.env.DATABASE_REDIS||""
})

RedisClient.connect()
  .then(e => {})

export default RedisClient
