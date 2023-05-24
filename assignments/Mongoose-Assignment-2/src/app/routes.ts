import { Router } from "express";
import booksRouter from "../modules/books/book.routes";

const router = Router();

router.use("/books", booksRouter);

export default router;
