import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String,
      default: null
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    phone: {
      type: String,
      default: null
    },
    address: {
      type: String,
      default: null
    },
    hotelname: {
      type : String,
      default: null
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
