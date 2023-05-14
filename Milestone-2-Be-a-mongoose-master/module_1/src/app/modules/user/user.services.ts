import { IUser } from "./user.interface";
import User from "./user.model";

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const users = await new User(payload).save();
  return users;
};
