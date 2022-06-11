import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signUpRequest from "../../api/services/signUpRequest";
import { Container, Field, RowField } from "./style";

export default function FormSignUpSection () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPass] = useState('');
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const signUp = async (e: any) => {
        e.preventDefault();
        try{
            const body = { name, email, password, confirmPassword };
            setDisabled(true);
            const response = await signUpRequest(body);
            alert(response.statusText);
            if(response.status === 201){
                navigate('/login');
            }
        }catch(e: any){
            alert(e.message);
            console.log(e.message);
            setDisabled(false);
        }
    }
    return (
        <Container onSubmit={signUp}>
            <RowField fieldType='input'>
                <Field type='text' placeholder='Nome' value={name} 
                onChange={(e) => { setName(e.target.value); }} required />
            </RowField>
            <RowField fieldType='input'>
                <Field type='email' placeholder='Email' value={email}
                onChange={(e) => { setEmail(e.target.value); }} required />
            </RowField>
            <RowField fieldType='input'>
                <Field type='password' placeholder='Senha' value={password}
                onChange={(e) => { setPassword(e.target.value); }} required />
            </RowField>
            <RowField fieldType='input'>
                <Field type='password' placeholder='Confirmar senha' value={confirmPassword}
                onChange={(e) => { setConfirmPass(e.target.value); }} required />
            </RowField>
            <RowField fieldType='submit'>
                <Field type='submit' value='Criar Conta' disabled={disabled} /> 
            </RowField>
        </Container>
    );
}