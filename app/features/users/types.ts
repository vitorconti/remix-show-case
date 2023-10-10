export type User = {
    email: string,
    password: string
}
type Permission = {
    permission: {
        routes: Record<string, string>[]
        components: Record<string, string>[]
    }
}
export type UserPermissions = {
    user: User;
    permission?: Permission;
}