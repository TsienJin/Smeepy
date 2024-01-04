/**
 * This file contains the types for JSON object that come from the backend.
 */



export type Project = {
  id: string,
  name: string
  description: string
  paddock_user_creator: {
    first_name: string,
    last_name: string
  },
  num_keys: number,
  credits: number
}


// Predominantly used when creating new API key.
// key itself will only be exposed immediately after creation.
export type ApiKeyCredentials = {
  id:string,
  label:string,
  description?:string
  key:string,
}

// Type for ApiKey used in non-sensitive contexts
export type ApiKey = {
  id:string,
  label:string,
  description?:string,

  // component for controlling allowed products
  paddock_api_key_services: {
    enable_beaver:boolean
  }
}