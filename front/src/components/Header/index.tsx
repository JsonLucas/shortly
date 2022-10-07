import { Box, Text, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import shortlyIcon from '../../assets/shortly-icon.svg';
import { useToken } from '../../hooks/useToken';
export function Header() {
	const [logged, setLogged] = useState<boolean>(false);
	const { getToken, removeToken } = useToken();
	const navigate = useNavigate();
	const logout = () => {
		removeToken();
		window.location.reload();
	}
	useEffect(() => {
		const token = getToken();
		if (token) {
			setLogged(true);
		}
	}, []);
	return (
		<>
			<Box padding='10px' w='100%' display='flex' justifyContent='space-between' alignItems='center'>
				<Box display='flex' justifyContent='flex-end' w='100%'>
					{!logged && <>
						<Text padding='5px' cursor='pointer' onClick={() => navigate('/login')}>Entrar</Text>
						<Text padding='5px' cursor='pointer' color='#80CC74' onClick={() => navigate('/signup')}>Cadastrar</Text>
					</>}
					{logged && <>
						<Text padding='5px' cursor='pointer' onClick={() => navigate('/')}>Home</Text>
						<Text padding='5px' cursor='pointer' onClick={() => navigate('/ranking')}>Ranking</Text>
						<Text padding='5px' cursor='pointer' color='darkred' onClick={logout}>Sair</Text>
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