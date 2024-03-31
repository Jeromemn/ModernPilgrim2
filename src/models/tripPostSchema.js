import mongoose from 'mongoose';
// import { enumToString } from "mongodb/src/utils";

const tripSchema = new mongoose.Schema({
  Id: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    // type: { type: String, enum: ['Coordinates', 'PlaceName'], required: true },
    type: String,
    required: true,
  },
  date: {
    type: Date,
    // required: true,
  },
  description: {
    type: String,
    required: true,
  },
  TripBudget: {
    type: Number,
  },
  activities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tripActivitiesSchema',
    },
  ],
  typeOfTrip: {
    type: String,
  },
  tripStatus: { type: String, enum: ['Upcoming', 'Ongoing', 'Past'], required: true },
  tips: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tripTipsSchema',
    },
  ],
  datePosted: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  image: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tripImageSchema',
    },
  ],
});

export default mongoose.models.Trip || mongoose.model('Trip', tripSchema);
