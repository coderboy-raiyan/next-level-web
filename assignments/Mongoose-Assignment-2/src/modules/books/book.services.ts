import BooksModel, { IBookModel } from "../../models/Book.model";

async function findBooksByGenrePublisher(
  genre: string,
  publisher: string
): Promise<IBookModel[] | string> {
  let query;
  if (publisher) {
    query = await BooksModel.find({ genre, "publisher.name": publisher });
  } else {
    query = await BooksModel.find({ genre });
  }
  if (!query.length) {
    return "Oops no data found. Please check your input field";
  }
  return query;
}

async function getAllBooks(): Promise<IBookModel[]> {
  return await BooksModel.find();
}

export default {
  findBooksByGenrePublisher,
  getAllBooks,
};
