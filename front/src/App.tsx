import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Ranking } from './pages/Ranking';
import { SignUp } from './pages/SignUp';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/ranking' element={<Ranking />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;
