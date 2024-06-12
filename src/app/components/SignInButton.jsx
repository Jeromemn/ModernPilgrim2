// import { signIn } from '@/app/auth.js';
import signInAction from '@/actions/signInAction';
import { useSession } from 'next-auth/react';

export function SignIn() {
  const session = useSession();

  if (session.status === 'authenticated') return null;

  return (
    <form action={signInAction}>
      <button type="submit">Sign In</button>
    </form>
  );
}
