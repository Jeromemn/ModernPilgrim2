import mongoose from 'mongoose';
import tripTipsSchema from './tripTipsSchema';
import tripImageSchema from './tripImageSchema';

const tripSchema = new mongoose.Schema({
  Id: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: 'User',
  },
  title: {
    type: String,
    // required: true,
    // unique: false,
  },
  location: {
    // type: { type: String, enum: ['Coordinates', 'PlaceName'], required: true },
    type: String,
    // required: true,
  },
  startDate: {
    type: Date,
    // required: true,
  },
  endDate: {
    type: Date,
    // required: true,
  },
  month: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  tripBudget: {
    type: Number,
  },
  activities: [String],
  typeOfTrip: {
    type: [String],
  },
  tripStatus: { type: String, enum: ['Upcoming', 'Ongoing', 'Past', ''] },
  tips: [tripTipsSchema],
  datePosted: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  tripImages: [tripImageSchema],
});

export default mongoose.models.Trip || mongoose.model('Trip', tripSchema);
