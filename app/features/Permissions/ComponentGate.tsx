import { Permission } from "~/mock/permissions-mock"

type ComponentGateProps = {
    userPermission: Permission
    requiredPermission: Permission
    children: Element
}
const ComponentGate: React.FC<ComponentGateProps> = ({ userPermission, requiredPermission, children }) => {
    return (
        <div>

        </div>
    )
}

export default ComponentGate
