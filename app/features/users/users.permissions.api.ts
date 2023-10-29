import { admin, normalUser } from "~/mock/permissions-mock";
import { type User } from "./types";

async function getPermissions(user: User) {
    await new Promise(r => setTimeout(r, 1000));
    if (user.email === admin.user.email) {
        return admin
    }
    return normalUser
}

export {
    getPermissions
}