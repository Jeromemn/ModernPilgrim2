import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    // required: true,
  },
  hasProfileImage: {
    type: Boolean,
    default: false,
  },
  bio: {
    type: String,
    // required: true,
  },
  trips: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trip',
    },
  ],
});

const User = mongoose.model('User', userSchema);

// export default mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
