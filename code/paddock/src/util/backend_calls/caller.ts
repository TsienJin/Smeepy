import type {EndpointString} from "../../backend_schema/endpoint_spec";
import type {AxiosError} from "axios";
import axios from "axios";



export type CallerMethods = "GET" | "POST"

export type CallerError = Error | AxiosError


/**
 * Method to make calls to backend endpoints that requires authorization and authentication
 * @param endpoint {EndpointString} Method will append the endpoint to the correct host name based on environment variable.
 * @param method {CallerMethods}
 * @param smeepy_token {string} Smeepy Token from LocalStorage
 * @param data {any} Must be serializable
 * @returns {Promise<T>}
 */
export async function Caller<T>(endpoint:EndpointString, method:CallerMethods, smeepy_token:string, data?:any):Promise<T> {
  switch (method) {
    case "GET": {
      const res = await axios.get(`${import.meta.env.PUBLIC_BACKEND_URL}${endpoint}`, {headers: {smeepy:smeepy_token}})
      return res.data as T
    }
    case "POST": {
      const res = await axios.post(`${import.meta.env.PUBLIC_BACKEND_URL}${endpoint}`, data, {headers: {smeepy:smeepy_token}})
      return res.data as T
    }
    default: {throw new Error("Method not specified!")}
  }
}