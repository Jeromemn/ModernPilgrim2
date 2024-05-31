// import { doSocialLogin } from '@/actions/signInAction';

import { createUser } from '@/actions/registrationAction';
const Register = () => {
  return (
    <div className="w-1/2">
      <h1>Sign up</h1>
      <form action={createUser}>
        {/*<div className="flex flex-col gap-3 w-full">*/}
        <input className="w-full" type="text" placeholder="Name" name="username" id="username" />
        <input className="w-full" type="email" placeholder="Email" name="email" id="email" />
        <input className="w-full" type="password" placeholder="Password" name="password" />
        <input className="w-full" type="text" placeholder="About you" name="bio" id="bio" />
        <button className="border rounded p-2 w-fit self-end" type="submit">
          Sign Up
        </button>
        {/*</div>*/}
        {/*<button className="border p-3" type="submit" name="action" value="google">*/}
        {/*  Sign up with Google*/}
        {/*</button>*/}
      </form>
    </div>
  );
};

export default Register;
