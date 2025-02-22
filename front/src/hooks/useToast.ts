import { useToast as useChakraToast, UseToastOptions } from '@chakra-ui/react';

export const useToast = () => {
	const toast = useChakraToast();
	const genericToast = (message: string, options?: UseToastOptions) => toast({ 
		description: message,
		duration: 3000,
		isClosable: true,
		...options  
	});

	return { genericToast };
}