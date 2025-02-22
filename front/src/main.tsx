import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthContextComponent } from './context/AuthContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider>
			<AuthContextComponent>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</AuthContextComponent>
		</ChakraProvider>
	</React.StrictMode>
)
