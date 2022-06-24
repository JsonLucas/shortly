import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { RowButtons, TopButton } from "./style";

export default function TopButtons(location: String | any) {
    const [hidden, setHidden] = useState(false);
    const [userData, setUserData] = useState<string>('');
    useEffect(() => { 
        const auxAuthLocal = localStorage.getItem('authorization');
        const auxUserData = localStorage.getItem('userData');
        if(auxAuthLocal){
            setHidden(true);
            setUserData(auxUserData ? JSON.parse(auxUserData) : '');
        }
    }, []);
    return (
        <RowButtons>
            {/*<p>{`Seja bem vindo(a) ${userData}`}</p>*/}
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