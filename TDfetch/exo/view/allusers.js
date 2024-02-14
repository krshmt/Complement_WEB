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
}
