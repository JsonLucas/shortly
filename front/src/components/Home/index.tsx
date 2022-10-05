import { Box, Text, Image } from '@chakra-ui/react';
import shortlyIcon from '../../assets/shortly-icon.svg';
import trophyIcon from '../../assets/trophy-icon.svg';
import { Header } from '../Header';
export function Shortener() {
	return (
		<Box width='90%' mx='auto'>
			<Header />
			<Box mx='auto' maxW='80%' mt='30px'>
				<Box display='flex' alignItems='center' justifyContent='space-around' mx='auto' maxW='17%'>
					<Image src={trophyIcon} />
					<Text fontSize='25px' fontWeight='bold'>Ranking</Text>
				</Box>
				<Box width='97%' mx='auto' p='7px' mt='25px' 
				border='1px solid rgba(0, 0, 0, 0.5)' borderRadius='5px 5px 0px 0px'>
					<Box display='flex'>
						<Text fontWeight='bold'>1. Fulainha - 32 links - 12312&nbsp;</Text>
						<Text> visualizações</Text>
					</Box>
					<Box display='flex'>
						<Text fontWeight='bold'>1. Fulainha - 32 links - 12312&nbsp;</Text>
						<Text> visualizações</Text>
					</Box>
				</Box>
				<Text mt='50px' fontWeight='bold' mx='auto' textAlign='center' fontSize='30px'>Crie sua conta para usar nosso serviço!</Text>
			</Box>
		</Box>
	);
}