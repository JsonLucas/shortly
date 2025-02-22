import { Header } from "../../Header";
import { Box, Button, Input, InputGroup } from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "../../../hooks/useSignUp";

export function SignUpForm(){
	const { register, handleSubmit } = useForm();
	const { signUp, isLoading } = useSignUp();
	const navigate = useNavigate();

	const handleSignUp = async (data: any) => {
		try {
			await signUp(data);
			setTimeout(() => navigate('/'), 500);
		} catch(e: any) {
			console.log(e);
		}
	}
	
	return (
		<Box w='90%' mx='auto'>
			<Header />
			<Box mt='50px' mx='auto' width={['85%', '75%', '65%']} p='5px'>
				<InputGroup display='flex' flexDirection='column'>
					<Input {...register('name')} type='text' placeholder="Nome" mb='10px' />
					<Input {...register('email')} type='email' placeholder="Email" mb='10px' />
					<Input {...register('password')} type='password' placeholder="Senha" mb='10px' />
					<Input {...register('confirmPassword')} type='password' placeholder="Confirmar senha" mb='10px' />
					<Button disabled={isLoading} isLoading={isLoading} w='150px' mx='auto' bgColor='#80CC74' color='white' onClick={handleSubmit(handleSignUp)}>
						Enviar
					</Button> 
				</InputGroup>
			</Box>
		</Box>
	);
}