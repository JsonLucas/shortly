import { Fragment, useState, useEffect } from "react";
import { getRankingRequest } from "../../api/services";
import { ILoadingStatus } from "../../interfaces/interfaces";
import { ContainerRankingUsers, RowRanking, RowSignUp } from "./style";

export default function RankingSection () {
    const [ranking, setRanking] = useState<Array<any>>([]); 
    const [loaded, setLoaded] = useState<ILoadingStatus>({status: false, error: ''});
    const [logged, setLogged] = useState<boolean>(false);
    useEffect(() => {
        const auxLocal = localStorage.getItem('authorization');
        if(!auxLocal){
            setLogged(false);
        }
        async function getRanking() {
            try{
                const response = await getRankingRequest();
                setRanking(response.data);
                setLoaded({status: true, error: ''});
            }catch(e: any){
                console.log(e);
                setLoaded({status: true, error: e.message});
            }
        }
        getRanking();
    }, []);
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
            <RowSignUp isLogged={logged}>Crie sua conta para usar nosso serviço!</RowSignUp>
        </Fragment>
    );
}