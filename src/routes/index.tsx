import { BrowserRouter } from "react-router-dom";
import LocationRoutes from "./LocationRoutes";

export default function PageRoutes (){
    return (
        <BrowserRouter>
            <LocationRoutes />
        </BrowserRouter>
    );
}