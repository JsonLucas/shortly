import { useQuery } from 'react-query';
import { getUserUrls } from '../api/urls';
import { useToken } from './useToken';

export const useUserUrls = () => {
	const { getToken } = useToken();
	const { data, isLoading, error } = useQuery(['user-urls'], async () => {
		const token = getToken();
		const headers = { authorization: token };
		const data = await getUserUrls({ headers });
		return data;
	});
	return { data, isLoading };
}