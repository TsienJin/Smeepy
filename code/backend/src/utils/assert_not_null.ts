/**
 * Method to ensure that val is defined
 * @param val
 */
export default function assert_not_null<T>(val:T|undefined|null|any):T{
  if(val===undefined||val===null){
    throw new Error("Assert_not_null error!")
  }
  return val
}