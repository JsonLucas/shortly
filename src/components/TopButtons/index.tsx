import { NavLink } from "react-router-dom";
import { RowButtons, TopButton } from "./style";

export default function TopButtons (){
    return (
        <RowButtons>
            <TopButton buttonType='sign-in'>
                <NavLink to='/login' className={({isActive}) => isActive ? 'active-initial-link' : 'inactive-initial-link'}>
                    Entrar
                </NavLink>
            </TopButton>
            <TopButton buttonType='sign-up'>
                <NavLink to='/signup'  className={({isActive}) => isActive ? 'active-initial-link' : 'inactive-initial-link'}>
                    Cadastrar-se
                </NavLink>
            </TopButton>
        </RowButtons>
    );
}