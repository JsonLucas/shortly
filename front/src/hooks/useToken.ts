export const useToken = () => {
	const token = localStorage.getItem('token');
	const getToken = () => {
		try{
			if(token){
				return JSON.parse(token);
			}
		}catch(e: any){
			console.log(e);
			return undefined
		}
	}
	const removeToken = () => {
		if(token){
			localStorage.removeItem('token');
		}
	}
	const setToken = (token: string) => {
		removeToken();
		localStorage.setItem('token', JSON.stringify(token));
	}
	return { getToken, removeToken, setToken };
}