import { useQuery } from 'react-query';
import { getRanking } from '../api/urls';

export const useRankingUrls = () => {
	const { data, isLoading, error, refetch } = useQuery(['ranking'], getRanking);
	console.log(data);
	return { 
		ranking: { data, isLoading, error, refetch } 
	};
}