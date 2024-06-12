'use server';

import dbConnect from '@/lib/db';
import Trip from '@/models/tripPostSchema';
import User from '@/models/userSchema';

export async function createTrip(tripData) {
  await dbConnect();
  try {
    const trip = new Trip(tripData);
    await trip.save();

    const user = await User.findById(tripData.userId);
    if (user) {
      user.trips.push(trip._id);
      await user.save();
    }
    return { success: true, trip: { title: trip.title } };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
