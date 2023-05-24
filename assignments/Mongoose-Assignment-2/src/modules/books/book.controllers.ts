import { Request, Response } from "express";
import logger from "../../utils/logger";
import services from "./book.services";

interface RequestParams {}
interface ResponseBody {}
interface RequestBody {}
interface RequestQuery {
  genre: string;
  publisher: string;
}

/*
 1. @routes - api/v1/books 
 3. @routes - api/v1/books?genre=fantasy
 2. @routes - api/v1/books?genre=fantasy&publisher=Roli Books 
*/
export async function getBooks(
  req: Request<RequestParams, ResponseBody, RequestBody, RequestQuery>,
  res: Response
) {
  try {
    const { genre, publisher } = req.query;
    let data;
    if (genre || publisher) {
      data = await services.findBooksByGenrePublisher(genre, publisher);
    } else {
      data = await services.getAllBooks();
    }
    res.status(200).json({ success: true, data });
  } catch (error: any) {
    logger.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
}
