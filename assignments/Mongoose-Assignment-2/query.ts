/*
 *** Tasks ***
 */

// Task - 1
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

// Task - 2
db.books.find({ genre: "Fantasy" });

// Task - 3
db.books.find({ genre: "Sci-Fi", "publisher.name": "Roli Books" });

// Task - 4
db.books.aggregate([
  {
    $facet: {
      featured: [{ $match: { rating: { $gte: 4 } } }],
      popular: [{ $match: { rating: { $gte: 4 } } }],
      BestSeller: [{ $match: { rating: { $gt: 4.5 } } }],
    },
  },
]);

// Task - 5
db.books.updateMany({}, [{ $set: { price: { $toInt: "$price" } } }]);
