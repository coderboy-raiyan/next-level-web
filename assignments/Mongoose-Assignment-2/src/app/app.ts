import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import router from "./routes";
const app: Application = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
});

app.use("/api/v1", router);

export default app;
