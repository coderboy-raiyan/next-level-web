import { Request, Response } from "express";
import { getUsersFromDB } from "./user.services";

export const getUsers = async (req: Request, res: Response) => {
  const user = await getUsersFromDB();

  res.status(200).json({
    status: "success",
    data: user,
  });
};
