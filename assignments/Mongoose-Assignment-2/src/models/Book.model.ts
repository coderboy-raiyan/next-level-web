import mongoose from "mongoose";

export interface IBookModel {
  title: string;
  author: string;
  genre: string[];
  publicationYear: number;
  publisher: {
    name: string;
    location: string;
  };
  reviews: [
    {
      user: string;
      comment: string;
    }
  ];
  rating: number;
  price: number;
}

const BookSchema = new mongoose.Schema<IBookModel>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: [String],
  publicationYear: {
    type: Number,
    required: true,
  },
  publisher: {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  reviews: [
    {
      user: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const BooksModel = mongoose.model<IBookModel>("Book", BookSchema);

export default BooksModel;
