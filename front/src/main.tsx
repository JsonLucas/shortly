import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
	<ChakraProvider>
		<ToastContainer />
		<QueryClientProvider client={queryClient}>
    		<App />
		</QueryClientProvider>
	</ChakraProvider>
  </React.StrictMode>
)
