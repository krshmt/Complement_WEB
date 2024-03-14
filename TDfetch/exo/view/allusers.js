import { ENDPOINT } from "../config.js";
import UserProvider from "../service/userprovider.js";

export default class AllUsers {

  async renderV2() {
    try {
        let users = await UserProvider.fetchUsers();
        let view = "<h2>Voitures</h2><ul>";

        for (const user of users) {
            view += `<li><strong>${user.Name}</strong></li>`;
            view += `<button>Voir plus</button>`;
        }
        
        view += "</ul>";

        let content = document.getElementById("content");
        content.innerHTML = view;
    } catch (error) {
        console.error("Error rendering users:", error);
    }
}

}
