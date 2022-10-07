import { Box, Text, Image } from '@chakra-ui/react';
import trophyIcon from '../../assets/trophy-icon.svg';
import { useRankingUrls } from '../../hooks/useRankingUrls';
import { useToken } from '../../hooks/useToken';
import { Header } from '../Header';
import { Loading } from '../Loading';
import { useState, useEffect } from 'react';
export function Ranking() {
	const { data, isLoading } = useRankingUrls();
	const { getToken } = useToken();
	const [logged, setLogged] = useState<boolean>(false);
	useEffect(() => {
		if (getToken()) {
			setLogged(true);
		}
	}, []);
	return (
		<>
			<Header />
			{isLoading && <Loading />}
			<Box mx='auto' maxW='80%' mt='30px'>
				<Box display='flex' alignItems='center' justifyContent='space-around' mx='auto' maxW='17%'>
					<Image src={trophyIcon} />
					<Text fontSize='25px' fontWeight='bold'>Ranking</Text>
				</Box>
				<Box width='97%' mx='auto' p='7px' mt='25px'
					border='1px solid rgba(0, 0, 0, 0.5)' borderRadius='5px 5px 0px 0px'>
					<Box display='flex'>
						<Text fontWeight='bold'>1. name - 10 links - 10&nbsp;</Text>
						<Text>visualizações</Text>
					</Box>
				</Box>
				{!logged &&
					<Text mt='50px' fontWeight='bold' mx='auto' textAlign='center' fontSize='30px'>
						Crie sua conta para usar nosso serviço!
					</Text>
				}
			</Box>
		</>
	);
}