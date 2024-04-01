import mongoose from 'mongoose';
// import { enumToString } from "mongodb/src/utils";

const tripActivitiesSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  activityImage: {
    type: String,
    // required: true,
  },
  hasActivityImage: {
    type: Boolean,
    default: false,
  },
});

module.exports = tripActivitiesSchema;
