import UserProvider from "../service/userprovider";

export default class AllUsers {
    async render() {
        let users = await UserProvider.fetchUsers();
        let view = '';
    }
}