import RedisClient from "@src/objects/redis_instance";


/**
 * Method to help with rate limiting of API keys
 *
 * @param key {string} API key used
 * @param max_rate {number} Maximum number of API calls per 60 seconds
 * https://redis.io/commands/incr/
 * https://chat.openai.com/share/e9e13463-94f4-4a4e-b8d4-95036c941b39
 */
export default async function rate_limit_valid (key:string, max_rate:number):Promise<boolean> {

  const count = await RedisClient.incr(`API_RATE_LIMIT:${key}`)

  if(count===1){ // sets the rate counter limit to expire 60s after first request
    await RedisClient.expire(`API_RATE_LIMIT:${key}`, 60)
  }


  return count <= max_rate;

}