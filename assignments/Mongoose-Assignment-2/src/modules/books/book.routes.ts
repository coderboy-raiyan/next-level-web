import { Router } from "express";
import { getBooks } from "./book.controllers";

const booksRouter = Router();

/* 
1. Get All books 
2. query to find all books in the "Books" collection with a specific genre
2. query to find books in the "Books" collection with a specific genre “Sci-Fi” and published by “Roli Books”.
*/
booksRouter.get("/", getBooks);

export default booksRouter;
