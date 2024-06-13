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
