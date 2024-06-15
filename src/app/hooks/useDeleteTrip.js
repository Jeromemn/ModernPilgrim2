import useSWRMutation from 'swr/mutation';

// const deleteTrip = async (url) => {
//   const response = await fetch(url, {
//     method: 'DELETE',
//   });
//
//   if (!response.ok) {
//     throw new Error('An error occurred while deleting the trip');
//   }
//
//   return response.json();
// };

const useDeleteTrip = (id) => {
  const { trigger, ...rest } = useSWRMutation(`/api/trip/${id}`, {
    method: 'DELETE',
  });

  return {
    trigger,
    ...rest,
  };
};

export default useDeleteTrip;
