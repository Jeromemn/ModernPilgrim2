import mongoose from 'mongoose';
// import { enumToString } from "mongodb/src/utils";

const tripTipsSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  content: [String],
});

module.exports = tripTipsSchema;
