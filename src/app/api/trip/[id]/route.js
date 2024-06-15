import dbConnect from '@/lib/db';
import Trip from '@/models/tripPostSchema';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import User from '@/models/userSchema';

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
    return Response.json(trip);
  } catch (error) {
    console.error('Error fetching trips:', error);
    return NextResponse.json({ error: 'Internal Server Error in route' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await dbConnect();
    const idObject = new ObjectId(id);
    const trip = await Trip.findById(idObject);

    if (!trip) {
      return NextResponse.json({ error: 'trip not found' }, { status: 404 });
    }
    await Trip.findByIdAndDelete(idObject);
    await User.updateOne({ trips: idObject }, { $pull: { trips: idObject } });
    return NextResponse.json({ message: 'Trip deleted successfully' });
  } catch (error) {
    console.error('Error fetching trips:', error);
    return NextResponse.json({ error: 'Internal Server Error in route' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
  const res = await request.json();
  try {
    await dbConnect();
    const idObject = new ObjectId(id);
    const trip = await Trip.findById(idObject);

    if (!trip) {
      return NextResponse.json({ error: 'trip not found' }, { status: 404 });
    }

    const updatedTrip = await Trip.findByIdAndUpdate(idObject, res, { new: true });
    return NextResponse.json(updatedTrip);
  } catch (error) {
    console.error('Error fetching trips:', error);
    return NextResponse.json({ error: 'Internal Server Error in route' }, { status: 500 });
  }
}
