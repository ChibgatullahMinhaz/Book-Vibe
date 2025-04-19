import React, {  useEffect, useState } from "react";
import { BooksContext } from "./BooksContext";

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  )
};

export default BookProvider;
