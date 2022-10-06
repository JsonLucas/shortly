import { Header } from "../../Header";
import { Box, Button, Input, InputGroup } from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { toast } from "react-toastify";
import { signInRequest } from "../../../api/users";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../../hooks/useToken";

export function LoginForm() {
	const { register, handleSubmit } = useForm();
	const [loading, setLoading] = useState<boolean>(false);
	const { setToken } = useToken();
	const navigate = useNavigate();
	const login = async (data: any) => {
		setLoading(true);
		try{
			const { token } = await signInRequest(data);
			setToken(token);
			toast('Login efetuado com sucesso!');
			setTimeout(() => navigate('/'), 1000);
		}catch(e: any){
			console.log(e);
			toast(e.message);
		}
		setLoading(false);
	}
	return (
		<Box w='90%' mx='auto'>
			<Header />
			<Box mt='50px' mx='auto' width={['85%', '75%', '65%']} p='5px'>
				<InputGroup display='flex' flexDirection='column'>
					<Input {...register('email')} type='email' placeholder="Email" mb='10px' />
					<Input {...register('password')} type='password' placeholder="Senha" mb='10px' />
					<Button w='150px' mx='auto' bgColor='#80CC74' color='white' onClick={handleSubmit(login)} disabled={loading}>
						{!loading && <>Cadastrar</>}
						{loading && <ThreeDots color="white" />}
					</Button>
				</InputGroup>
			</Box>
		</Box>
	);
}