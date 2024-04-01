import connect from '@/lib/db';

export async function register() {
  try {
    await connect();
    console.log('Instrumentation connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}
