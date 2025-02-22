import { Box, Text } from "@chakra-ui/react";
import { IoIosTrash } from "react-icons/io";
import { IUrl } from "../../interfaces/urls";
import { useEffect } from "react";

interface Props {
    url: IUrl
}

export function UrlRow({ url }: Props) {
    const handleVisitUrl = (shortUrl: string, fullUrl: string) => {}
    const handleDeleteUrl = (id: number) => {}

    useEffect(() => {
        console.log(url);
    }, [url]);

    return (
        <Box mt='25px'>
            <Box w='100%' borderRadius='10px' display='flex' border='0.1px solid #80CC74' mb='15px'>
                <Box p='10px' w='85%' bgColor='#80CC74' display='flex'
                    justifyContent='space-around' alignItems='center'>
                    <Text color='white'>{url.fullUrl}</Text>
                    <Text color='white' cursor='pointer' onClick={() => handleVisitUrl(url.shortUrl, url.fullUrl)}>
                        {url.shortUrl}
                    </Text>
                    {/* <Text color='white'>Quantidade de visitantes: {url.visitCount}</Text> */}
                </Box>
                <Box p='10px' w='15%' display='flex' alignItems='center' justifyContent='center'>
                    <IoIosTrash size={30} color='red' style={{ cursor: 'pointer' }}
                        onClick={() => handleDeleteUrl(url.id)} />
                </Box>
            </Box>
        </Box>
    );
}