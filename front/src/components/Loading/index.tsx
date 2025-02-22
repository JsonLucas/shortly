import { Center } from '@chakra-ui/react';
import { ThreeDots } from 'react-loader-spinner';

export function Loading(){
	return (
		<Center w='100%'>
			<ThreeDots color='#80CC74' />
		</Center>
	);
}