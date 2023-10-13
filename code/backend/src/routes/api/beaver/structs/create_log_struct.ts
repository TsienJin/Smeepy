import {InferType, object, string} from "yup";

/**
 * Endpoint schema for CREATE BEAVER LOG
 */
export const endpoint_beaver_log_create_schema_validator = object({
  label: string().required(),
  log: string().required(),
  level: string().notRequired()
})
export type endpoint_beaver_log_create_schema = InferType<typeof endpoint_beaver_log_create_schema_validator>