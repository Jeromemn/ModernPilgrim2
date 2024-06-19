import dbConnect from '@/lib/db';
import User from '@/models/userSchema';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

// get user from user id
export async function GET(request, { params }) {
  const { id } = params;

  try {
    await dbConnect();
    const idObject = new ObjectId(id);
    const user = await User.findById(idObject);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: 'Internal Server Error in route' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await dbConnect();
    const idObject = new ObjectId(id);
    const user = await User.findById(idObject);

    if (!user) {
      return NextResponse.json({ error: 'trip not found' }, { status: 404 });
    }
    await User.findByIdAndDelete(idObject);
    // await User.updateOne({ trips: idObject }, { $pull: { trips: idObject } });
    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error fetching trips:', error);
    return NextResponse.json({ error: 'Internal Server Error in route' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
  const res = await request.json();
  const likedTripIds = res.likedTrips;
  try {
    await dbConnect();
    const idObject = new ObjectId(id);
    const user = await User.findById(idObject);

    if (!user) {
      return NextResponse.json({ error: 'user not found' }, { status: 404 });
    }
    if (likedTripIds) {
      const likedTripObjectIds = likedTripIds.map((tripId) => new ObjectId(tripId));
      res.likedTrips = likedTripObjectIds;
    }

    const updatedUser = await User.findByIdAndUpdate(idObject, res, { new: true });
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Error fetching trips:', error);
    return NextResponse.json({ error: 'Internal Server Error in route' }, { status: 500 });
  }
}
