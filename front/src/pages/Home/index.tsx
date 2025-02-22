import { Box } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { useUserUrls } from "../../hooks/useUserUrls";
import { ShortenUrl } from "../../components/Forms/ShortenUrl";
import { UrlRow } from "../../components/UrlRow";
import { Loading } from "../../components/Loading";

export function Home() {
	const { userUrls } = useUserUrls();

	return (
		<Box width='90%' mx='auto'>
			<Header />

			<Box mx='auto' maxW='80%' mt='30px'>
				<ShortenUrl />
				{userUrls.isLoading && <Loading />}
				{userUrls.data && <>
					{userUrls.data.map((item) => <UrlRow key={item.shortUrl} url={item} />)}
				</>}
			</Box>
		</Box>
	);
}