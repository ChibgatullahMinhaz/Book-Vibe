import React, { useEffect, useState } from "react";
import { BooksContext } from "./BooksContext";

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      const fetchData = async ()=>{
        const Res = await fetch("booksData.json");
        const Data = await Res.json();
        setBooks(Data);
        setLoading(false);
      }
      fetchData()
  }, [loading]);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
};

export default BookProvider;
