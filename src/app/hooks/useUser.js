import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const useUser = (id) => {
  const { data: user, error, isLoading } = useSWR(`/api/user/${id}`, fetcher);

  return {
    user,
    isLoading,
    isError: error,
  };
};

export default useUser;
