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
  }
}