import { Header } from "../Header";
import { Box, Button, Input, Text } from '@chakra-ui/react';
import { IoIosTrash } from 'react-icons/io';
import { useState } from 'react';
import { toast } from "react-toastify";
import { useToken } from "../../hooks/useToken";
import { createShortUrl, deleteUserUrl } from "../../api/urls";
import { useUserUrls } from "../../hooks/useUserUrls";
import { useMutation } from 'react-query';
import { queryClient } from "../../main";
import { Loading } from "../Loading";

export function UserUrls() {
	const [fullUrl, setFullUrl] = useState<string>('');
	const { getToken } = useToken();
	const { data, isLoading } = useUserUrls();
	const { mutateAsync } = useMutation(async (urlId?: number) => {
		const headers = { authorization: getToken() };
		if(urlId){
			await deleteUserUrl(urlId, { headers });
		}else{
			await createShortUrl({ fullUrl }, { headers });
		}
	}, {
		onSuccess: () => {
			queryClient.invalidateQueries(['user-urls']);
			queryClient.invalidateQueries(['ranking']);
		}
	});
	const shorten = async () => {
		try {
			await mutateAsync(undefined);
			toast('Url encurtada com sucesso!');
		} catch (e: any) {
			toast(e.message);
			console.log(e);
		}
	}
	const deleteUrl = async (id: number) => {
		try{
			await mutateAsync(id);
			toast('Url deletada com sucesso!');
		}catch(e: any){
			console.log(e);
			toast(e.message);
		}
	}
	return (
		<>
			<Header />
			{isLoading && <Loading />}
			{data &&
				<Box mx='auto' maxW='80%' mt='30px'>
					<Box display='flex' w='100%' justifyContent='space-between' alignItems='center'>
						<Input w='75%' py='23px' placeholder='http:// ...' onChange={({ target }) => setFullUrl(target.value)} />
						<Button bgColor='#5D9040' color='white' w='17%' p='25px' onClick={shorten}>Encurtar link</Button>
					</Box>
					{data.map((item, index) => <Box mt='50px' h='400px' key={index}>
						<Box w='100%' borderRadius='10px' display='flex' border='0.1px solid #80CC74' mb='15px'>
							<Box p='10px' w='85%' bgColor='#80CC74' display='flex'
								justifyContent='space-around' alignItems='center'>
								<Text color='white'>{item.fullUrl}</Text>
								<Text color='white'>{item.shortUrl}</Text>
								<Text color='white'>Quantidade de visitantes: {item.visitCount}</Text>
							</Box>
							<Box p='10px' w='15%' display='flex' alignItems='center' justifyContent='center'>
								<IoIosTrash size={30} color='red' style={{ cursor: 'pointer' }}  onClick={() => deleteUrl(item.id)}/>
							</Box>
						</Box>
					</Box>)}
				</Box>
			}
		</>
	);
}