import mongoose from 'mongoose';

const tripImageSchema = new mongoose.Schema({
  tripImageUrl: {
    type: String,
  },
  imageName: {
    type: String,
  },
  // hasTripImage: {
  //   type: Boolean,
  //   default: false,
  // },
});

module.exports = tripImageSchema;
