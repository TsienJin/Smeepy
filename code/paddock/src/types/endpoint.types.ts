/**
 * This file contains the schema for the response from the various backend endpoints
 */
import type {Project} from "./object.types.ts";


// URL/admin/project/get-by-id
export type Project_get_by_id = {
  message: string,
  product: Project
}