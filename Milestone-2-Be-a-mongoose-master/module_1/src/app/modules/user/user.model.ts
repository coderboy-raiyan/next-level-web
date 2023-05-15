import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";

const userSchema = new Schema<IUser, UserModel>({
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  dateOfBirth: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  email: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
});

userSchema.static("getAdminUsers", async function () {
  const users = await this.find({ role: "admin" });
  return users;
});
const User = model<IUser, UserModel>("User", userSchema);

export default User;

// instance methods --> instance er methods
// class -> instance + methods -> instance methods
