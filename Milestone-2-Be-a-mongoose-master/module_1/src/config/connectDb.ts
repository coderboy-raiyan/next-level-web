import mongoose from "mongoose";

async function connectDb() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/web-dev");
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
}

export default connectDb;
