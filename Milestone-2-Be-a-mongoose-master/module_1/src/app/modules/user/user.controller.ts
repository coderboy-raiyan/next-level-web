import { Request, Response } from "express";
import { createUserToDB, getUsersFromDB } from "./user.services";

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