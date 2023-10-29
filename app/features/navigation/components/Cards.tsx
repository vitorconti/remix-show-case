import Card from "./Card";
import Icon from "~/features/icons/Icon";
import { cards } from "~/mock/cards-mock";

export default function Cards() {

    return <>{cards.map(card =>
        <Card key={card.id}
            icon={<Icon iconName={card.icon} />}
            requiredPermisson={{ component: card.permissionName }} />)}</>
}