import { Fragment } from "react";
import { ContainerRankingUsers, RowRanking, RowSignUp } from "./style";

export default function RankingSection () {
    const users = [
        {
            name: 'user1', 
            numLinks: 5,
            visitCount: 1000
        },
        {
            name: 'user2', 
            numLinks: 5,
            visitCount: 1000
        },
        {
            name: 'user3', 
            numLinks: 5,
            visitCount: 1000
        },
        {
            name: 'user4', 
            numLinks: 5,
            visitCount: 1000
        },
        {
            name: 'user5', 
            numLinks: 5,
            visitCount: 1000
        },
    ];
    return (
        <Fragment>
            <ContainerRankingUsers>
                {users.map((item, index) => 
                    <RowRanking>{`${index+1}. ${item.name} - ${item.numLinks} Links - ${item.visitCount} visualizações`}</RowRanking>
                )}
            </ContainerRankingUsers>
            <RowSignUp>Crie sua conta para usar nosso serviço!</RowSignUp>
        </Fragment>
    );
}