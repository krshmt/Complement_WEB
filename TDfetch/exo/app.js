import AllUsers from "./view/allusers.js";

let userAll = new AllUsers();
window.addEventListener('load', userAll.render("ul"));
