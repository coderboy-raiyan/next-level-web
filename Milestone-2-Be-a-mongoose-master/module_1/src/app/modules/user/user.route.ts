import express from "express";
import {
  createUser,
  getAdminUsers,
  getUserById,
  getUsers,
} from "./user.controller";
const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/admins", getAdminUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/create-user", createUser);

export default userRouter;
