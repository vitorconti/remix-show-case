import { admin } from "~/mock/permissions-mock";
import { User } from "./types";

async function getPermissions(user: User) {
    await new Promise(r => setTimeout(r, 1000));
    console.log(user)
    if (user.email === admin.user.email) {
        return admin
    }
}

export {
    getPermissions
}