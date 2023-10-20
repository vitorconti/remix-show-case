export type User = {
    email: string,
    password: string
}
type Permission = {

    routes: Record<string, boolean>[]
    components: Record<string, boolean>[]

}
export type UserPermissions = {
    user: User;
    permission?: Permission;
}