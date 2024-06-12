// // get user id from session
// // find user id in the database
// // get trip ids from user in database
// // get trips from trip ids
// 'use server';
// import dbConnect from '@/lib/db';
// import User from '@/models/userSchema';
// import Trip from '@/models/tripPostSchema';
// import { ObjectId } from 'mongodb';
//
// const getProfile = async (userId) => {
//   await dbConnect();
//   const idObject = new ObjectId(userId);
//   try {
//     const user = await User.findById(idObject);
//     const trips = await Trip.find({ _id: { $in: user.trips } });
//
//     const userInfo = {
//       _id: user._id.toString(),
//       name: user.name,
//       email: user.email,
//       trips: user.trips.map((trip) => trip.toString()),
//     };
//     const userTrips = trips.map((trip) => {
//       const tripObject = trip.toObject();
//       tripObject._id = trip._id.toString();
//       tripObject.userId = trip.userId.toString();
//
//       return tripObject;
//     });
//     return { success: true, user: userInfo, trips: userTrips };
//   } catch (error) {
//     return { success: false, error: error.message };
//   }
// };
//
// export default getProfile;
