import { useMutation } from "react-query"
import { signInRequest } from "../api/users";
import { SignIn } from "../interfaces/users";
import { useLocalStorage } from "./useLocalStorage";
import { useToast } from "./useToast";
import { useAuthContext } from "../context/AuthContext";

export const useLogin = () => {
    const { setItem } = useLocalStorage();
    const { genericToast } = useToast();
    const { setIsAuthenticated } = useAuthContext();

    const { mutateAsync: login, isLoading } = useMutation({
        mutationFn: async (body: SignIn) => await signInRequest(body),
        onSuccess: (data) => {
            const { token } = data;
            setItem('session', token);
            setIsAuthenticated(true);
            genericToast('Login efetuado com sucesso!', { status: 'success' });
        },
        onError: () => {
            genericToast('Algum erro ocorreu.', { status: 'error' })
        }
    });

    return { login, isLoading };
}