import { Container, Field, RowField } from "../FormSignUpSection/style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInRequest } from "../../api/services";

export default function FormLoginSection () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const signin = async (e: any) => {
        e.preventDefault();
        const body = { email, password };
        try{
            setDisabled(true);
            const request = await signInRequest(body);
            localStorage.setItem('authorization', JSON.stringify(request.data.token));
            localStorage.setItem('userData', JSON.stringify(request.data.name));
            navigate('/');
        }catch(e: any){
            console.log(e.message);
            setDisabled(false);
        }
    }
    return (
        <Container onSubmit={signin}>
            <RowField fieldType='input'>
                <Field type='email' placeholder='Email' value={email} 
                onChange={({target}) => { setEmail(target.value) }} required />
            </RowField>
            <RowField fieldType='input'>
                <Field type='password' placeholder='Senha' value={password} 
                onChange={({target}) => { setPassword(target.value) }} required />
            </RowField>
            <RowField fieldType='submit'>
                <Field type='submit' value='Entrar' disabled={disabled} />
            </RowField>
        </Container>
    );
}