import {InferType, number, object} from "yup";

/**
 * Endpoint schema for FETCH BEAVER LOGS
 * Enforced on get params
 */
export const endpoint_beaver_log_fetch_schema_validator = object({
  take: number().integer().min(0).default(100),
  skip: number().integer().min(0).default(0),
})
export type endpoint_beaver_log_fetch_schema = InferType<typeof endpoint_beaver_log_fetch_schema_validator>