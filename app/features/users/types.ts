export type User = {
    email: string,
    password: string
}
export type ComponentPermission = { component: string, hasAccess?: boolean }
export type Permission = {
    routes: [{}],
    components: Array<ComponentPermission>
}
export type UserPermissions = {
    user: User;
    permission?: Permission;
}