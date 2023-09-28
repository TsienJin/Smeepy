import {InferType, object, string} from "yup";


export const endpoint_user_create_schema_validator = object({
  email: string().email().required(),
  password: string().required()
})

export type endpoint_user_create_schema = InferType<typeof endpoint_user_create_schema_validator>

