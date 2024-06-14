import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const useTrips = () => {
  const { data: trips, error, isLoading } = useSWR(`/api/trips/`, fetcher);

  return {
    trips,
    isLoading,
    isError: error,
  };
};

export default useTrips;
