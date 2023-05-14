import express from "express";
import { createUser, getUsers } from "./user.controller";
const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/create-user", createUser);

export default userRouter;
