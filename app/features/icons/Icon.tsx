import { icons } from "./svgs"

type IconProps = {
    iconName: string
}
const Icon: React.FC<IconProps> = ({ iconName }) => {
    return icons[iconName]
}

export default Icon
