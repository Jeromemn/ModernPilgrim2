'use server';

import dbConnect from '@/lib/db';
import User from '@/models/userSchema';

export async function createUser(formData) {
  await dbConnect();
  const username = formData.get('username');
  console.log('username:', formData.get('username'));
  const email = formData.get('email');
  console.log('email:', formData.get('email'));
  const password = formData.get('password');
  console.log('password:', formData.get('password'));
  const bio = formData.get('bio');
  console.log('bio:', formData.get('bio'));

  try {
    const user = new User({
      username,
      email,
      password,
      bio,
    });
    await user.save();
    console.log('user:', user);
    return { success: true, user: { name: user.name } };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function socialSignUp(formData) {
  await dbConnect();
  const username = formData.get('name');
  console.log('username:', formData.get('username'));
  const email = formData.get('email');
  console.log('email:', formData.get('email'));
  const password = formData.get('password');
  console.log('password:', formData.get('password'));
}
