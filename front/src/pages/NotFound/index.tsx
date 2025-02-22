import { Center, Text, Button, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate();

    return (
        <Center w='100%' h="100vh">
            <Stack>
                <Text fontSize='27px'>Página não encontrada!</Text>
                <Button variant='ghost' onClick={() => navigate('/ranking')}>Voltar para o início</Button>
            </Stack>
        </Center>
    );
}