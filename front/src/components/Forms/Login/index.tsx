import { Header } from "../../Header";
import { Box, Button, Input, InputGroup } from '@chakra-ui/react';
import { useForm } from "react-hook-form";

export function LoginForm(){
	const { register, handleSubmit } = useForm();
	const login = async (data: any) => {
		console.log(data);
	}
	return (
		<Box w='90%' mx='auto'>
			<Header />
			<Box mt='50px' mx='auto' width={['85%', '75%', '65%']} p='5px'>
				<InputGroup display='flex' flexDirection='column'>
					<Input {...register('email')} type='email' placeholder="Email" mb='10px' />
					<Input {...register('password')} type='password' placeholder="Senha" mb='10px' />
					<Button w='150px' mx='auto' bgColor='#80CC74' color='white' onClick={handleSubmit(login)}>Entrar</Button> 
				</InputGroup>
			</Box>
		</Box>
	);
}