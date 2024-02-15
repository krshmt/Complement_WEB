import { ENDPOINT } from "../config.js";

export default class UserProvider {
  static fetchUsers = async () => {
    try{
        const response = await fetch(`${ENDPOINT}`);
        const json = await response.json();
        console.log(response.length); 
        return json;
    }
    catch(error){
        console.error(error);
    }
  }
}