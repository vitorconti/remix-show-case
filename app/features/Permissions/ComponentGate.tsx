import { type ReactElement } from "react"
import { type UserPermissions, type ComponentPermission } from "../users/types"
import { useRouteLoaderData } from "@remix-run/react";
import { checkPermission } from "./checkPermissions";
import { type SessionData } from "@remix-run/node";

type ComponentGateProps = {
    requiredPermission: ComponentPermission
    children: ReactElement
}
const ComponentGate = ({ requiredPermission, children }: ComponentGateProps) => {
    const sessionPermissonRoute = useRouteLoaderData<SessionData>('routes/home')?.session?.data
    const userPermissions: UserPermissions = sessionPermissonRoute.user
    console.log(userPermissions.permission)
    const hasPermisson = checkPermission(requiredPermission, userPermissions?.permission)
    if (hasPermisson) {
        return children
    }
    return <></>
}

export default ComponentGate
