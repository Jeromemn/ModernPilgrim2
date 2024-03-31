import mongoose from 'mongoose';
// import { enumToString } from "mongodb/src/utils";

const tripImageSchema = new mongoose.Schema({
  tripImage: {
    type: String,
    // required: true,
  },
  hasTripImage: {
    type: Boolean,
    default: false,
  },
});

module.exports = tripImageSchema;
