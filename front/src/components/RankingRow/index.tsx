import { Flex, Text } from "@chakra-ui/react";
import { Ranking } from "../../interfaces/urls";

interface Props {
    ranking: Ranking,
    index: number
}

export function RankingRow({ ranking, index }: Props) {
    return (
        <Flex display='flex'>
            <Text fontWeight='bold'>
                {(index + 1)}. {ranking.name} - {ranking.numLinks} links - {ranking.visitCount}&nbsp;
            </Text>
            <Text>visualizações</Text>
        </Flex>
    );
}