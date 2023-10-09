import {InferType, object, string} from "yup";

/**
 * Endpoint schema for CREATING PADDOCK PROJECT
 */
export const endpoint_project_create_schema_validator = object({
  name: string().required(),
  description: string(),
})
export type endpoint_project_create_schema = InferType<typeof endpoint_project_create_schema_validator>


/**
 * Endpoint schema for CREATING PADDOCK PROJECT API KEY
 */
export const endpoint_project_create_api_key_schema_validator = object({
  project_id: string().required(),
  api_label: string().required(),
  api_description: string()
})
export type endpoint_project_create_api_key_schema = InferType<typeof endpoint_project_create_api_key_schema_validator>