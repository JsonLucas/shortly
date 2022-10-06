import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Ranking } from "../../components/Ranking";
import { UserUrls } from "../../components/UserUrls";
import { useToken } from "../../hooks/useToken";

export function Home(){
	const { getToken } = useToken();
	const [showShorter, setShowShorter] = useState<boolean>(false);
	useEffect(() => {
		const token = getToken();
		if(token){
			setShowShorter(true);
		}
	}, []);
	return (
		<Box width='90%' mx='auto'>
			{showShorter && <UserUrls />}
			{!showShorter && <Ranking />}
		</Box>
	);
}