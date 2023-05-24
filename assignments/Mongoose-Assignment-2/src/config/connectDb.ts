import mongoose from "mongoose";
import logger from "../utils/logger";

async function connectDb() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/bookStoreBd");
    logger.info("Database connected successfully");
  } catch (error) {
    logger.error(error);
  }
}

export default connectDb;
