// 'use server';
import dbConnect from '@/lib/db';
import Trip from '@/models/tripPostSchema';
// export async function GET() {
//   await dbConnect();
//   try {
//     const trips = await Trip.find({});
//     console.log(trips);
//     return Response.json({ trips });
//   } catch (error) {
//     console.error('Failed to get trips', error);
//     return Response.json({ error: 'Failed to get trips' });
//   }
// }

export async function GET() {
  await dbConnect();

  try {
    const trips = await Trip.find({});
    console.log(trips);
    // Use Response.json() to return the data
    return new Response(JSON.stringify({ trips }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Failed to get trips', error);
    // Use Response to return an error
    return new Response(JSON.stringify({ error: 'Failed to get trips' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
