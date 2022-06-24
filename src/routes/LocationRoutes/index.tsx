import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Ranking from "../../pages/Ranking";
import SignUp from "../../pages/SignUp";

export default function LocationRoutes() {
    const pageLocation = useLocation();
    return (
        <Routes>
            <Route path="/" element={<Home pageLocation={pageLocation.pathname} />} />
            <Route path="/signup" element={<SignUp pageLocation={pageLocation.pathname} />} />
            <Route path="/login" element={<Login pageLocation={pageLocation.pathname} />} />
            <Route path="/ranking" element={<Ranking pageLocation={pageLocation.pathname} />} />
        </Routes>
    );
}
