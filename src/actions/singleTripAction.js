// 'use server';
// import dbConnect from '@/lib/db';
// import Trip from '@/models/tripPostSchema';
//
// const getSingleTrip = async (tripId) => {
//   await dbConnect();
//   try {
//     const trip = await Trip.findById(tripId);
//     const tripObject = trip.toObject();
//     tripObject._id = trip._id.toString();
//     tripObject.userId = trip.userId.toString();
//     return { success: true, trip: tripObject };
//   } catch (error) {
//     return { success: false, error: error.message };
//   }
// };
//
// export default getSingleTrip;
