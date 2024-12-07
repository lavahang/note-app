import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    //   lowercase: true,
    //   match: [/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, 'Please fill a valid email address'],
      trim: true
    },
    password: {
      type: String,
      required: true,
      // minlength: 6 // You can set a minimum length for security
    },
})

const User = mongoose.model('User', userSchema);

export default User;