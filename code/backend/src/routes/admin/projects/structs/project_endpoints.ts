import {boolean, InferType, object, string} from "yup";

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


/**
 * Endpoint schema for GETTING PADDOCK PROJECT BY ID
 */
export const endpoint_project_get_by_id_validator = object({
  id: string().required()
})
export type endpoint_project_get_by_id_schema = InferType<typeof endpoint_project_get_by_id_validator>

/**
 * Endpoint schema for GETTING PADDOCK PROJECT DASHBOARD INFO BY ID
 */
export const endpoint_project_dashboard_get_by_id_validator = object({
  id: string().required()
})
export type endpoint_project_dashboard_get_by_id_schema = InferType<typeof endpoint_project_dashboard_get_by_id_validator>


/**
 * Endpoint schema for GETTING PADDOCK PROJECT API KEYS BY ID
 */
export const endpoint_project_keys_get_by_id_validator = object({
  id: string().required() // proj id
})
export type endpoint_project_keys_get_by_id_schema = InferType<typeof endpoint_project_keys_get_by_id_validator>


/**
 * Endpoint schema for UPDATING PADDOCK PROJECT API KEY DETAILS BY ID
 */
export const endpoint_project_key_update_details_by_id_validator = object({
  id: string().required(), // Key id
  label: string().required(),
  description: string()
})
export type endpoint_project_key_update_details_by_id_schema = InferType<typeof endpoint_project_key_update_details_by_id_validator>

/**
 * Endpoint schema for DELETING PADDOCK PROJECT API KEY BY ID
 */
export const endpoint_project_key_delete_by_id_validator = object({
  id: string().required(), // Key id
})
export type endpoint_project_key_delete_by_id_schema = InferType<typeof endpoint_project_key_delete_by_id_validator>




/**
 * Endpoint schema for SETTING ENABLE_BEAVER FOR PROJECT API KEY
 */
export const endpoint_project_key_enable_beaver_validator = object({
  id: string().required(), // Key id
  enable_beaver: boolean().required()
})
export type endpoint_project_key_enable_beaver_schema = InferType<typeof endpoint_project_key_enable_beaver_validator>
