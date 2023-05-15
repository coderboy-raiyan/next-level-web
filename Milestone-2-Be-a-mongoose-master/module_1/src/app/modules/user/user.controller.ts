import { Request, Response } from "express";
import {
  createUserToDB,
  getAdminUserFromDB,
  getUserIdFromDB,
  getUsersFromDB,
} from "./user.services";

export const getUsers = async (req: Request, res: Response) => {
  const users = await getUsersFromDB();

  res.status(200).json({
    status: "success",
    data: users,
  });
};

export async function createUser(req: Request, res: Response) {
  try {
    const user = await createUserToDB(req.body);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
  }
}

export async function getUserById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await getUserIdFromDB(id);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
  }
}

export async function getAdminUsers(req: Request, res: Response) {
  try {
    const users = await getAdminUserFromDB();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.log(error);
  }
}
