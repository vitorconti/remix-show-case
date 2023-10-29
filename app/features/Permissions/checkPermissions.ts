import { type ComponentPermission, type Permission } from "../users/types";

export function checkPermission(requiredPermission: ComponentPermission, userPermission?: Permission) {
    if (!userPermission) {
        return true
    }
    console.log(userPermission)
    const { components: userComponentPermission } = userPermission
    const { component: requiredComponentPermission } = requiredPermission

    let hasPermission
    for (const userPermission of userComponentPermission) {
        console.log(userPermission)
        if (requiredComponentPermission === userPermission.component) {
            hasPermission = userPermission.hasAccess
        }

    }
    console.log(hasPermission)
    return hasPermission
}