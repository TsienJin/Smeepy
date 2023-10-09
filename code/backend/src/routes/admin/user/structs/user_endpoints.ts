import {InferType, object, string} from "yup";


/**
 * Endpoint schema for CREATING USER ACCOUNT
 */
export const endpoint_user_create_schema_validator = object({
  email: string().email().required(),
  password: string().required(),
  first_name: string().required(),
  last_name: string().required()
})
export type endpoint_user_create_schema = InferType<typeof endpoint_user_create_schema_validator>

/**
 * Endpoint schema for USER EMAIL LOGIN
 */
export const endpoint_user_email_login_schema_validator = object({
  email: string().email().required(),
  password: string().required()
})
export type endpoint_user_email_login_schema = InferType<typeof endpoint_user_email_login_schema_validator>