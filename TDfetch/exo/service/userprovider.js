import { ENDPOINT } from "../config";

export default class UserProvider {
  static fetchUsers = async () => {
    try{
        const response = await fetch(`${ENDPOINT}`);
        const json = await response.json();
        return json;
    }
    catch(error){
        console.error(error);
    }
  }
}