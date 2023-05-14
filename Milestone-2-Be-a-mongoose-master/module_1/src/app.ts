import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import userRouter from "./app/modules/user/user.route";
const app: Application = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
});

app.use("/api/v1/users", userRouter);

export default app;
