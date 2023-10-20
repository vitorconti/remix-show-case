import { UserPermissions } from "~/features/users/types";

const admin: UserPermissions = {
    user: {
        email: "admin@master.com",
        password: '123456'
    },

}
export type Permission = {
    routes: [{}],
    components: [{}]
}
const normalUser: UserPermissions = {
    user: {
        email: "anyemail@generic.com",
        password: "123456"
    },
    permission: {
        routes: [{ "home": true }],
        components: [{
            component: "academicCard",
            hasAccess: true
        }, { component: "processorCard", hasAcces: true }, { component "statisticCard", hasAccess: true }]
    }
}
const componentPermissions = [
    { component: "academicCard" },
    { component: "processorCard" },
    { component: "statisticCard" },

]

export { admin, normalUser, componentPermissions }