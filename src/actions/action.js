'use server';

import Trip from '../models/tripPostSchema';

const addTrip = async (trip) => {
  const title = trip.get('title');
  const description = trip.get('description');
  const location = trip.get('location');
  const date = trip.get('date');

  const newTrip = new Trip({
    title,
    description,
    location,
    date,
  });
  return newTrip.save();
};

const getTrips = async () => {
  return Trip.find();
};

// eslint-disable-next-line import/no-anonymous-default-export
export { addTrip, getTrips };
