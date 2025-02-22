import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useUserUrls } from "../../../hooks/useUserUrls";
import { useToast } from "../../../hooks/useToast";

export function ShortenUrl() {
	const [fullUrl, setFullUrl] = useState<string>('');
    const { create: { shortenUrl, isShortenLoading } } = useUserUrls();
	const { genericToast } = useToast();
    
	const handleShorten = async () => {
		try {
			await shortenUrl(fullUrl);
			genericToast('Url encurtada com sucesso!', { status: 'success' });
		} catch (e: any) {
			let message = 'Algum erro ocorreu.';
			if(e.response && e.response.data) message = e.response.data.message;
			
			genericToast(message, { status: 'error' });
			console.log(e);
		}
	}
    
    return (
        <Box display='flex' w='100%' justifyContent='space-between' alignItems='center'>
            <Input w='75%' py='23px' placeholder='http:// ...' onChange={({ target }) => setFullUrl(target.value)} />
            <Button isLoading={isShortenLoading} bgColor='#5D9040' color='white' w='17%' p='25px' onClick={handleShorten}>Encurtar link</Button>
        </Box>
    );
}