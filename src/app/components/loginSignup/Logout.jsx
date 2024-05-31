// 'use server';
import { doLogout } from '@/actions/signInAction';
import { useSession } from 'next-auth/react';

// import { auth } from '@/app/auth';
const Logout = () => {
  const session = useSession();
  // const session = await auth();
  console.log('session:', session);
  //
  if (session.status === 'unauthenticated') return null;

  return (
    <form action={doLogout}>
      <button type="submit">Logout</button>
    </form>
  );
};

export default Logout;
