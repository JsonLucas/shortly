import { useQuery } from 'react-query';
import { getRanking } from '../api/urls';
export const useRankingUrls = () => {
	const { data, isLoading, error } = useQuery(['ranking'], async () => {
		const data = await getRanking();
		return data;
	});
	return { data, isLoading };
}