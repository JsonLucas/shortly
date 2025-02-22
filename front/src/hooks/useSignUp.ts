import { useMutation } from "react-query"
import { signUpRequest } from "../api/users";
import { SignUp } from "../interfaces/users";
import { useToast } from "./useToast";

export const useSignUp = () => {
    const { genericToast } = useToast();

    const { mutateAsync: signUp, isLoading } = useMutation({
        mutationFn: async (body: SignUp) => await signUpRequest(body),
        onSuccess: (data) => {
            genericToast('Cadastro efetuado com sucesso!', { status: 'success' });
        },
        onError: () => {
            genericToast('Algum erro ocorreu.', { status: 'error' })
        }
    });

    return { signUp, isLoading };
}