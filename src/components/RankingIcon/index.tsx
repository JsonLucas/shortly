import { Icon, RankingSubtitle, RowIcon, SlotIcon } from "./style";

export default function RankingIcon (){
    return (
        <RowIcon>
            <SlotIcon>
                <Icon src='../../assets/trophy-icon.png' />
            </SlotIcon>
            <RankingSubtitle>Ranking</RankingSubtitle>
        </RowIcon>
    );
}