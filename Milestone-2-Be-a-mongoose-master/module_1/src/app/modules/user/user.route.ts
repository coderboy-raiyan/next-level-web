import express from "express";
import { createUser, getUserById, getUsers } from "./user.controller";
const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/create-user", createUser);

export default userRouter;
