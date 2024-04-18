'use server';

import dbConnect from '@/lib/db';
import Trip from '@/models/tripPostSchema';

export async function createTrip(tripData) {
  await dbConnect();
  try {
    const trip = new Trip(tripData);
    await trip.save();
    return { success: true, trip: { title: trip.title } };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
