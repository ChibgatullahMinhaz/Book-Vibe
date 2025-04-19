import React from "react";
import { Book } from "../Book/Book";

const Books = ({ books }) => {
  return (
    <div className="my-4 md:my-14 px-2 lg:px-9">
      <h1 className="font-bold text-center text-3xl md:text-4xl lg:text-5xl">
        Books
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 ">
        {Array.isArray(books) &&
          books.map((book) => <Book book={book} key={book.bookId}></Book>)}
      </div>
    </div>
  );
};

export default Books;
