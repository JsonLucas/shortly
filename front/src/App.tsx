import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Ranking } from './pages/Ranking';
import { SignUp } from './pages/SignUp';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useEffect } from 'react';
import { useAuthContext } from './context/AuthContext';
import { NotFound } from './pages/NotFound';


function App() {
	const { getValue } = useLocalStorage();
	const { isAuthenticated, setIsAuthenticated } = useAuthContext();
	
	useEffect(() => {
		const auth = getValue('session');
		if(auth) setIsAuthenticated(true);
	}, [isAuthenticated]);

	return (
		<BrowserRouter>
			<Routes>
				{isAuthenticated && <><Route path="/" element={<Home />} /></>}
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/ranking' element={<Ranking />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;
