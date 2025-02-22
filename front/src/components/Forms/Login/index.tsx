import { Header } from "../../Header";
import { Box, Button, Input, InputGroup } from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../hooks/useLogin";

export function LoginForm() {
	const { register, handleSubmit } = useForm();
	const { login, isLoading } = useLogin();
	const navigate = useNavigate();

	const handleLogin = async (data: any) => {
		try{
			await login(data);
			navigate('/')
		} catch(e: any) {
			console.log(e);
		}
	}
	
	return (
		<Box w='90%' mx='auto'>
			<Header />
			<Box mt='50px' mx='auto' width={['85%', '75%', '65%']} p='5px'>
				<InputGroup display='flex' flexDirection='column'>
					<Input {...register('email')} type='email' placeholder="Email" mb='10px' />
					<Input {...register('password')} type='password' placeholder="Senha" mb='10px' />
					<Button isLoading={isLoading} disabled={isLoading} w='150px' mx='auto' bgColor='#80CC74' color='white' onClick={handleSubmit(handleLogin)}>
						Entrar
					</Button>
				</InputGroup>
			</Box>
		</Box>
	);
}