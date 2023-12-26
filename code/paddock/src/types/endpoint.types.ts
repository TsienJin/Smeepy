/**
 * This file contains the schema for the response from the various backend endpoints
 */
import type {ApiKeyCredentials, Project} from "./object.types.ts";


// URL/admin/project/get-by-id
export type Project_get_by_id = {
  message: string,
  product: Project
}

// URL/admin/project/create-api-key
export type Create_api_key = {
  message: string,
  api_key: ApiKeyCredentials
}