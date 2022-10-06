import { Box } from '@chakra-ui/react';
import { ThreeDots } from 'react-loader-spinner';

export function Loading(){
	return (
		<Box display='flex' justifyContent='center' alignItems='center' w='100%'>
			<ThreeDots color='#80CC74' />
		</Box>
	);
}