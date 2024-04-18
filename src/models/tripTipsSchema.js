import mongoose from 'mongoose';

const tripTipsSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  content: String,
});

module.exports = tripTipsSchema;
