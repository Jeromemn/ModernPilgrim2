import { auth } from '@/auth';

const session = async () => {
  return await auth();
};
