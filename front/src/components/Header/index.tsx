import { Text, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Shortly } from '../Icons/Shortly';
import { useAuthContext } from '../../context/AuthContext';
import { useToast } from '../../hooks/useToast';

export function Header() {
	const { isAuthenticated, setIsAuthenticated } = useAuthContext();
	const { removeValue } = useLocalStorage();
	const { genericToast } = useToast();
	const navigate = useNavigate();

	const logout = () => {
		setIsAuthenticated(false);
		removeValue('session');
		genericToast('Logout efetuado com sucesso!', { status: 'success' });
		navigate('/ranking');
	}
	
	return (
		<>
			<Flex padding='10px' w='100%' justifyContent='space-between' alignItems='center'>
				<Flex justifyContent='flex-end' w='100%'>
					{!isAuthenticated && <>
						<Text padding='5px' cursor='pointer' onClick={() => navigate('/login')}>Entrar</Text>
						<Text padding='5px' cursor='pointer' color='#80CC74' onClick={() => navigate('/signup')}>Cadastrar</Text>
					</>}
					{isAuthenticated && <>
						<Text padding='5px' cursor='pointer' onClick={() => navigate('/')}>Home</Text>
						<Text padding='5px' cursor='pointer' onClick={() => navigate('/ranking')}>Ranking</Text>
						<Text padding='5px' cursor='pointer' color='darkred' onClick={logout}>Sair</Text>
					</>}
				</Flex>
			</Flex>
			<Flex mt='10px' mx='auto' maxW='20%' p='5px' justifyContent='space-around' alignItems='center'>
				<Text fontSize='40px'>Shortly</Text>
				<Shortly />
			</Flex>
		</>
	);
}