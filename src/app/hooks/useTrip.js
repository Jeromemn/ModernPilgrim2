// import Trip from '@/models/tripPostSchema';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const useTrip = (id) => {
  const { data: trip, error, isLoading } = useSWR(`/api/trip/${id}`, fetcher);

  return {
    trip,
    isLoading,
    isError: error,
  };
};

export default useTrip;
