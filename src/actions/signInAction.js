'use server';
import { signIn, signOut } from '@/auth.js';

export default async function signInAction(formData) {
  console.log('format:', formData);
  console.log('signInAction');
  await signIn('google');
  // res.redirect('/');
}

export async function doSocialLogin(formData) {
  const action = formData.get('action');
  await signIn(action, { redirectTo: '/' });
  // console.log(action);
  // res.redirect('/');
}

export async function doLogout() {
  console.log('doLogout');
  await signOut({ redirectTo: '/' });
  // res.redirect('/');
}
