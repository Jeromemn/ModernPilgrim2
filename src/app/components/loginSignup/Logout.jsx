import { doLogout } from '@/actions/signInAction';
import { useSession } from 'next-auth/react';

const Logout = () => {
  const session = useSession();
  if (session.status === 'unauthenticated') return null;

  return (
    <form action={doLogout}>
      <button type="submit">Logout</button>
    </form>
  );
};

export default Logout;
