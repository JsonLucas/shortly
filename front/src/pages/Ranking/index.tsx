import { Box, Text } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { useRankingUrls } from "../../hooks/useRankingUrls";
import { useAuthContext } from "../../context/AuthContext";
import { Trophy } from "../../components/Icons/Trophy";
import { RankingRow } from "../../components/RankingRow";

export function Ranking() {
	const { isAuthenticated } = useAuthContext();
	const { ranking } = useRankingUrls();

	return (
		<main>
			<Header />
			{ranking.isLoading && <Loading />}
			{ranking.data &&
				<Box mx='auto' maxW='80%' mt='30px'>
					<Box display='flex' alignItems='center' justifyContent='space-around' mx='auto' maxW='17%'>
						<Trophy />
						<Text fontSize='25px' fontWeight='bold'>Ranking</Text>
					</Box>
					<Box width='97%' mx='auto' p='7px' mt='25px'
						border='1px solid rgba(0, 0, 0, 0.5)' borderRadius='5px 5px 0px 0px'>
						{ranking.data.length === 0 && <Text textAlign='center'>Nenhum link para mostrar por enquanto...</Text>}
						{ranking.data.map((item, index) => <RankingRow ranking={item} index={index} />)}
					</Box>
					{!isAuthenticated &&
						<Text mt='50px' fontWeight='bold' mx='auto' textAlign='center' fontSize='30px'>
							Crie sua conta para usar nosso serviço!
						</Text>
					}
				</Box>
			}
		</main>
	);
}