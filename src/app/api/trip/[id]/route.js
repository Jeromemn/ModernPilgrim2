import dbConnect from '@/lib/db';
import Trip from '@/models/tripPostSchema';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

// get trip from trip id
export async function GET(request, { params }) {
  const { id } = params;

  try {
    await dbConnect();
    const idObject = new ObjectId(id);
    const trip = await Trip.findById(idObject);

    if (!trip) {
      return NextResponse.json({ error: 'trip not found' }, { status: 404 });
    }
    return Response.json({ trip });
  } catch (error) {
    console.error('Error fetching trips:', error);
    return NextResponse.json({ error: 'Internal Server Error in route' }, { status: 500 });
  }
}
