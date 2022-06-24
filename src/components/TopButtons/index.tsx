import { RowButtons, TopButton } from "./style";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TopButtons(location: String | any) {
    useEffect(() => { console.log(location.location); });
    const [hidden, setHidden] = useState(false);
    return (
        <RowButtons>
            <TopButton hidden={hidden}>
                <NavLink to='/login' className={({ isActive }) => isActive ? 'active-initial-link' : 'inactive-initial-link'}>
                    Entrar
                </NavLink>
            </TopButton>
            <TopButton hidden={hidden}>
                <NavLink to='/signup' className={({ isActive }) => isActive ? 'active-initial-link' : 'inactive-initial-link'}>
                    Cadastrar-se
                </NavLink>
            </TopButton>
            <TopButton hidden={!hidden}>
                <NavLink to='/login' className={({ isActive }) => isActive ? 'active-initial-link' : 'inactive-initial-link'}>
                    Home
                </NavLink>
            </TopButton>
            <TopButton hidden={!hidden}>
                <NavLink to='/login' className={({ isActive }) => isActive ? 'active-initial-link' : 'inactive-initial-link'}>
                    Ranking
                </NavLink>
            </TopButton>
            <TopButton hidden={!hidden}>
                <NavLink to='/login' className={({ isActive }) => isActive ? 'active-initial-link' : 'inactive-initial-link'}>
                    Sair
                </NavLink>
            </TopButton>
        </RowButtons>
    );
}