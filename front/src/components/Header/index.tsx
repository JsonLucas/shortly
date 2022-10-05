import { Box, Text, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import shortlyIcon from '../../assets/shortly-icon.svg';
export function Header() {
	const [logged, setLogged] = useState<boolean>(false);
	const navigate = useNavigate();
	useEffect(() => {
		try {
			const token = localStorage.getItem('token');
			if (token) {
				setLogged(true);
			}
		} catch (e: any) {
			console.log(e);
			toast(e.message);
		}
	}, []);
	return (
		<>
			<Box padding='10px' width='100%' display='flex' justifyContent='space-between' alignItems='center'>
				{logged && <Text fontWeight='bold' color='#80CC74'>Bem vindo pessoa!</Text>}
				<Box display='flex' justifyContent='flex-end'>
					{logged && <>
						<Text padding='5px' cursor='pointer' onClick={() => navigate('/login')}>Entrar</Text>
						<Text padding='5px' cursor='pointer' color='#80CC74' onClick={() => navigate('/signup')}>Cadastrar</Text>
					</>}
					{!logged && <>
						<Text padding='5px' cursor='pointer'>Home</Text>
						<Text padding='5px' cursor='pointer'>Ranking</Text>
						<Text padding='5px' cursor='pointer' color='darkred'>Sair</Text>
					</>}
				</Box>
			</Box>
			<Box mt='10px' mx='auto' maxW='20%' p='5px' display='flex' justifyContent='space-around' alignItems='center'>
				<Text fontSize='40px'>Shortly</Text>
				<Image src={shortlyIcon} height='80px' />
			</Box>
		</>
	);
}