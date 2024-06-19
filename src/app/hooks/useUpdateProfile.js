import useSWRMutation from 'swr/mutation';

async function updateProfile(url, { arg }) {
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(arg),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
}

const useUpdateProfile = (userId) => {
  const { trigger, ...rest } = useSWRMutation(`/api/user/${userId}`, updateProfile);
  return {
    trigger,
    ...rest,
  };
};

export default useUpdateProfile;
