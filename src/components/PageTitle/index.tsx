import { RowTitle, SlotIcon, Title, Icon } from "./style";

export default function PageTitle () {
    return (
        <RowTitle>
            <Title>Shortly</Title>
            <SlotIcon>
                <Icon src='../../assets/shortlyIcon.svg' />
            </SlotIcon>
        </RowTitle>
    );
}