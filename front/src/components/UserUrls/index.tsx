import { Header } from "../Header";
import { Box, Button, Input, Text } from '@chakra-ui/react';
import { IoIosTrash } from 'react-icons/io';
import { useState } from 'react';
import { toast } from "react-toastify";
import { useToken } from "../../hooks/useToken";
import { useUserUrls } from "../../hooks/useUserUrls";
import { Loading } from "../Loading";

export function UserUrls() {
	const [fullUrl, setFullUrl] = useState<string>('');
	const { getToken } = useToken();
	const { userUrls, shortenUrl, visitShortUrl, deleteUrl } = useUserUrls();
	const handleShorten = async () => {
		try {
			await shortenUrl.mutateAsync(fullUrl);
			toast('Url encurtada com sucesso!');
		} catch (e: any) {
			toast(e.message);
			console.log(e);
		}
	}
	const handleVisitUrl = async (short: string, link: string) => {
		try{
			await visitShortUrl.mutateAsync(short);
			window.open(link, '_blank');
			toast('Link aberto com sucesso!');
		}catch(e: any){
			console.log(e);
			toast(e.message);
		}
	}
	const handleDeleteUrl = async (id: number) => {
		try{
			await deleteUrl.mutateAsync(id);
			toast('Url deletada com sucesso!');
		}catch(e: any){
			console.log(e);
			toast(e.message);
		}
	}
	return (
		<>
			<Header />
			{userUrls.isLoading && <Loading />}
			{userUrls.data &&
				<Box mx='auto' maxW='80%' mt='30px'>
					<Box display='flex' w='100%' justifyContent='space-between' alignItems='center'>
						<Input w='75%' py='23px' placeholder='http:// ...' onChange={({ target }) => setFullUrl(target.value)} />
						<Button bgColor='#5D9040' color='white' w='17%' p='25px' onClick={handleShorten}>Encurtar link</Button>
					</Box>
					{userUrls.data.map((item, index) => <Box mt='25px' key={index}>
						<Box w='100%' borderRadius='10px' display='flex' border='0.1px solid #80CC74' mb='15px'>
							<Box p='10px' w='85%' bgColor='#80CC74' display='flex'
								justifyContent='space-around' alignItems='center'>
								<Text color='white'>{item.fullUrl}</Text>
								<Text color='white' cursor='pointer' onClick={() => handleVisitUrl(item.shortUrl, item.fullUrl)}>
									{item.shortUrl}
								</Text>
								<Text color='white'>Quantidade de visitantes: {item.visitCount}</Text>
							</Box>
							<Box p='10px' w='15%' display='flex' alignItems='center' justifyContent='center'>
								<IoIosTrash size={30} color='red' style={{ cursor: 'pointer' }} 
								onClick={() => handleDeleteUrl(item.id)}/>
							</Box>
						</Box>
					</Box>)}
				</Box>
			}
		</>
	);
}