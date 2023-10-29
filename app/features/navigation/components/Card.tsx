import { type ReactElement } from "react"
import ComponentGate from "~/features/Permissions/ComponentGate"
import { type ComponentPermission } from "~/features/users/types"

type CardProps = {
    icon: ReactElement
    requiredPermisson: ComponentPermission
}
const Card: React.FC<CardProps> = ({ icon, requiredPermisson }) => {
    return (
        <ComponentGate requiredPermission={requiredPermisson}>
            <div className="flex items-center justify-center h-48 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                    {icon}
                </p>
            </div>
        </ComponentGate>
    )
}

export default Card
