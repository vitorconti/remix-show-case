export type User = {
    email: string,
    password: string
}
type ComponentPermission = { component: string, hasAccess: boolean }
type Permission = {
    routes: [{}],
    components: Array<ComponentPermission>
}
export type UserPermissions = {
    user: User;
    permission?: Permission;
}