import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const useUserTrips = (id) => {
  const { data: trips, error, isLoading } = useSWR(`/api/trips/${id}`, fetcher);

  return {
    trips,
    isLoading,
    isError: error,
  };
};

export default useUserTrips;
