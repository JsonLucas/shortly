import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Ranking from "../pages/Ranking";
import SignUp from "../pages/SignUp";

export default function PageRoutes (){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/signup' element={<SignUp />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/ranking' element={<Ranking />}/>
            </Routes>
        </BrowserRouter>
    );
}