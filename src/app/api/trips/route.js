import dbConnect from '@/lib/db';
import Trip from '@/models/tripPostSchema';
import { NextResponse } from 'next/server';
// get trips from user id
export async function GET() {
  try {
    await dbConnect();
    const trips = await Trip.find();

    if (!trips) {
      return NextResponse.json({ error: 'trips not found' }, { status: 404 });
    }
    return Response.json(trips);
  } catch (error) {
    console.error('Error fetching trips:', error);
    return NextResponse.json({ error: 'Internal Server Error in route' }, { status: 500 });
  }
}
