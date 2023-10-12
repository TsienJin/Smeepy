/**
 * Method to generate header to be added to Res
 * @param jwt_string
 */
export function set_auth_header(jwt_string:string): string {
  return `Bearer ${jwt_string}`
}


/**
 * Method to remove "Bearer " from authorization header string
 * @param auth_header
 */
export function extract_val_from_auth_header_string(auth_header:string): string {
  return auth_header.replace("Bearer ","")
}