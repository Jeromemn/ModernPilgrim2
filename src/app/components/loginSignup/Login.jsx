import { doSocialLogin } from '@/actions/signInAction';
import { useState } from 'react';
const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const handleSignUp = () => {
    setSignUp(true);
  };

  return (
    <div className="w-1/2">
      <h1>Login</h1>
      <form action={doSocialLogin}>
        <div className="flex flex-col gap-3 w-full">
          <input className="w-full" type="text" placeholder="Email" />
          <input className="w-full" type="password" placeholder="Password" />
          <button className="border rounded p-2 w-fit self-end">Login</button>
        </div>
        <button className="border p-3" type="submit" name="action" value="google">
          Sign in with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
