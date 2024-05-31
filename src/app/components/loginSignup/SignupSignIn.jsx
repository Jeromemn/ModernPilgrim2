import { doSocialLogin } from '@/actions/signInAction';
import { useState } from 'react';
import Register from '@/app/components/loginSignup/Register';
import Login from '@/app/components/loginSignup/Login';

const SignupSignIn = () => {
  const [signUp, setSignUp] = useState(false);
  // const handleSignUp = () => {
  //   setSignUp(true);
  // };

  const handleToggleSignup = () => {
    setSignUp(!signUp);
  };
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-1/2 h-96 bg-brown">
        {signUp ? (
          <div className="w-1/2 flex flex-col h-full gap-3 items-center justify-center">
            <Register />
            <p>Already have an account?</p>
            <button onClick={handleToggleSignup}>Sign in</button>
          </div>
        ) : (
          <div className="w-1/2 flex flex-col h-full gap-3 items-center justify-center">
            <Login />
            <p>Dont have an account?</p>
            <button onClick={handleToggleSignup}>Sign up</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupSignIn;
