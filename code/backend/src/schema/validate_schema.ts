import {ObjectSchema} from "yup";


/**
 * Method to wrap yup's validators, so we can just check for undefined instead of doing another layer
 * of try/catch. This is useful when writing logic directly into endpoints and being able to provide
 * more useful error messages.
 * @param validator
 * @param uncertain
 */
export async function validate_schema<T>(validator:ObjectSchema<any>, uncertain:any):Promise<T|undefined>{
  try{
    return await validator.validate(uncertain)
  } catch (e){
    console.error(e)
  }
  return undefined
}