import UserProvider from "../service/userprovider.js";

export default class AllUsers {
  async render(tag) {
    let users = await UserProvider.fetchUsers();
    const myList = document.querySelector(tag);
    for (const user of users) {
      let li = document.createElement("li");
      let strong = document.createElement("strong");
      strong.textContent = user.name;
      li.appendChild(strong);
      li.append(user.email);
      myList.appendChild(li);
    }
  }

  async renderV2() {
    try {
        let users = await UserProvider.fetchUsers();
        let view = "<h2>Users</h2><ul>";

        for (const user of users) {
            view += `<li><strong>${user.name}</strong> ${user.email}</li>`;
        }
        
        view += "</ul>";

        let content = document.getElementById("content");
        content.innerHTML = view;
    } catch (error) {
        console.error("Error rendering users:", error);
    }
}

}
