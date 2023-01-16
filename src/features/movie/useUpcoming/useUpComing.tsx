import { useQuery } from 'react-query';
import { upcomingApi } from '../../../apis/movieApi';
import { ListResponse, MovieDetail } from '../../../types';
import { AxiosError, AxiosResponse } from 'axios';

const useUpcomingMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('upcomingMovie', upcomingApi);
}

export default useUpcomingMovie;

export {}